import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';
import "./ContactPro.css";

export default function ContactPro() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      let data: any = {};
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        data = { error: text || 'Invalid response from server.' };
      }

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus({ type: 'success', message: data.message });

      // Format message for WhatsApp
      const waPhoneNumber = '916381737399';
      const textMessage = `*New Quote Request from JAC Construction Website:*
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
💬 *Details:* ${formData.details}`;
      const encodedMessage = encodeURIComponent(textMessage);
      const whatsappUrl = `https://wa.me/${waPhoneNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      setFormData({ name: '', email: '', phone: '', details: '' });
    } catch (err: any) {
      setStatus({ type: 'error', message: err.message || 'Failed to submit quote request.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-pro">
      <div className="contact-background-elements">
        <div className="glow-circle top-left"></div>
        <div className="glow-circle bottom-right"></div>
      </div>
      
      <div className="contact-wrapper">

        {/* LEFT SIDE: Info */}
        <motion.div 
          className="contact-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="tag-container">
            <span className="tag-line"></span>
            <p className="tag">GET IN TOUCH</p>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Let’s Build <br />
            <span>Something Great</span>
          </motion.h1>

          <motion.p className="desc" variants={itemVariants}>
            From concept to completion, we deliver high-quality construction
            solutions tailored to your vision. Reach out to our team of experts today.
          </motion.p>

          <motion.div className="contact-details" variants={containerVariants}>
            <motion.div className="detail-item" variants={itemVariants}>
              <div className="detail-icon">
                <FaPhoneAlt />
              </div>
              <div className="detail-text">
                <span>Phone</span>
                <p><a href="tel:+916381737399">+91 63817 37399</a></p>
              </div>
            </motion.div>

            <motion.div className="detail-item" variants={itemVariants}>
              <div className="detail-icon">
                <FaEnvelope />
              </div>
              <div className="detail-text">
                <span>Email</span>
                <p><a href="mailto:jacconstruction0@gmail.com">jacconstruction0@gmail.com</a></p>
              </div>
            </motion.div>

            <motion.div className="detail-item" variants={itemVariants}>
              <div className="detail-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="detail-text">
                <span>Location</span>
                <p>Erode, Tamil Nadu, India</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="social-links-contact" variants={itemVariants}>
            <p>Follow our work:</p>
            <div className="social-icons-wrapper">
              <a href="https://www.facebook.com/profile.php?id=61591193533701" target="_blank" rel="noopener noreferrer" className="social-btn"><FaFacebookF /></a>
              <a href="https://www.instagram.com/jacconstruction0/?hl=en" target="_blank" rel="noopener noreferrer" className="social-btn"><FaInstagram /></a>
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT SIDE: Form */}
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="contact-card-header">
            <h3>Request a Free Quote</h3>
            <p>Fill out the form and we'll get back to you within 24 hours.</p>
          </div>

          {status && (
            <div className={`status-banner ${status.type}`} style={{
              padding: '12px 18px',
              borderRadius: '6px',
              marginBottom: '20px',
              fontWeight: 600,
              fontSize: '0.9rem',
              textAlign: 'center',
              backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
              color: status.type === 'success' ? '#155724' : '#721c24',
              border: `1px solid ${status.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
            }}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="modern-form">
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                required 
                placeholder=" " 
                value={formData.name} 
                onChange={handleChange} 
              />
              <label htmlFor="name">Full Name</label>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder=" " 
                  value={formData.email} 
                  onChange={handleChange} 
                />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  id="phone" 
                  required 
                  placeholder=" " 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
                <label htmlFor="phone">Phone Number</label>
              </div>
            </div>

            <div className="form-group">
              <textarea 
                id="details" 
                rows={4} 
                required 
                placeholder=" " 
                value={formData.details} 
                onChange={handleChange}
              ></textarea>
              <label htmlFor="details">Project Details</label>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'} <span className="btn-arrow">→</span>
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
