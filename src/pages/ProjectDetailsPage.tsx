import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaMoneyBillWave, FaClock, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

import { API_URL } from '../config';

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  client: string;
  duration: string;
  status: string;
  budget: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery?: string[];
}

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/projects/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Project not found');
        return res.json();
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Could not load project details. It may not exist.');
        setLoading(false);
      });
  }, [id]);

  const handlePrevImage = () => {
    if (project?.gallery && lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? project.gallery!.length - 1 : prev! - 1));
    }
  };

  const handleNextImage = () => {
    if (project?.gallery && lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === project.gallery!.length - 1 ? 0 : prev! + 1));
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '150px 0', textAlign: 'center', minHeight: '80vh' }}>
        <p>Loading project details...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div style={{ padding: '150px 0', textAlign: 'center', minHeight: '80vh' }}>
        <p style={{ color: '#ff4d4f', fontSize: '1.2rem', marginBottom: '20px' }}>{error || 'Project not found.'}</p>
        <Link to="/portfolio" style={{ color: 'var(--primary-yellow)', fontWeight: 'bold' }}>
          Back to Projects
        </Link>
      </div>
    );
  }

  const allImages = [project.image, ...(project.gallery || [])];

  return (
    <div className="project-details-page" style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ padding: '30px 1.5rem' }}>
        {/* Back Link */}
        <Link to="/portfolio" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '10px', 
          color: 'var(--text-primary)', 
          textDecoration: 'none', 
          fontWeight: 700,
          marginBottom: '30px',
          textTransform: 'uppercase',
          fontSize: '0.9rem',
          letterSpacing: '1px'
        }}>
          <FaArrowLeft /> Back to Portfolio
        </Link>

        {/* Title Block */}
        <div style={{ marginBottom: '40px' }}>
          <span style={{ color: 'var(--primary-yellow)', fontWeight: 800, letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase' }}>
            {project.category}
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', marginTop: '10px', lineHeight: 1.1 }}>
            {project.title}
          </h1>
        </div>

        {/* Large Feature Banner */}
        <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '60vh', marginBottom: '50px', boxShadow: 'var(--card-shadow)' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', marginBottom: '60px' }}>
          
          {/* Description */}
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '20px', textTransform: 'uppercase' }}>Project Overview</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '20px' }}>
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Stats / Info Card */}
          <div style={{ background: 'var(--bg-secondary)', padding: '40px', borderRadius: '12px', boxShadow: 'var(--card-shadow)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '25px', textTransform: 'uppercase' }}>Project Specs</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaMapMarkerAlt style={{ color: 'var(--primary-yellow)', fontSize: '1.2rem' }} />
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block' }}>Location</span>
                  <strong style={{ fontSize: '1.05rem' }}>{project.location}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaUser style={{ color: 'var(--primary-yellow)', fontSize: '1.2rem' }} />
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block' }}>Client</span>
                  <strong style={{ fontSize: '1.05rem' }}>{project.client}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaCalendarAlt style={{ color: 'var(--primary-yellow)', fontSize: '1.2rem' }} />
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block' }}>Duration</span>
                  <strong style={{ fontSize: '1.05rem' }}>{project.duration}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaMoneyBillWave style={{ color: 'var(--primary-yellow)', fontSize: '1.2rem' }} />
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block' }}>Budget / Cost</span>
                  <strong style={{ fontSize: '1.05rem' }}>{project.budget}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaClock style={{ color: 'var(--primary-yellow)', fontSize: '1.2rem' }} />
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block' }}>Status</span>
                  <strong style={{ fontSize: '1.05rem', color: project.status === 'Completed' ? '#2ecc71' : '#f1c40f' }}>
                    {project.status}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {project.gallery && project.gallery.length > 0 && (
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '30px', textTransform: 'uppercase' }}>Project Gallery</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
              {allImages.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setLightboxIndex(idx)}
                  style={{ 
                    borderRadius: '8px', 
                    overflow: 'hidden', 
                    height: '200px', 
                    cursor: 'pointer',
                    boxShadow: 'var(--card-shadow)',
                    border: '2px solid transparent'
                  }}
                >
                  <img src={img} alt={`Gallery ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} className="gallery-thumbnail" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.95)',
              zIndex: 11000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setLightboxIndex(null)}
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '2rem',
                cursor: 'pointer',
                zIndex: 11002
              }}
            >
              <FaTimes />
            </button>

            {/* Left Nav */}
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
              style={{
                position: 'absolute',
                left: '30px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#fff',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '15px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FaChevronLeft />
            </button>

            {/* Main Lightbox Image */}
            <div style={{ maxWidth: '85%', maxHeight: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img 
                src={allImages[lightboxIndex]} 
                alt="Lightbox View" 
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '4px' }} 
              />
            </div>

            {/* Right Nav */}
            <button 
              onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
              style={{
                position: 'absolute',
                right: '30px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#fff',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '15px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetailsPage;
