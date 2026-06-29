import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsSection.css';

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

import { API_URL } from '../config';

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch projects');
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Filter Logic
  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return project.status === 'Completed';
    if (filter === 'Ongoing') return project.status === 'Ongoing';
    return project.category.toLowerCase().includes(filter.toLowerCase());
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const filterCategories = [
    { label: 'ALL PROJECTS', value: 'All' },
    { label: 'VILLAS & RESIDENTIAL', value: 'Residential' },
    { label: 'COMMERCIAL', value: 'Commercial' },
    { label: 'INTERIORS', value: 'Interior' },
    { label: 'COMPLETED', value: 'Completed' },
    { label: 'ONGOING', value: 'Ongoing' }
  ];

  return (
    <section className="projects-section-page">
      <div className="container">

        <div className="section-header">
          <h4 className="subtitle">OUR PORTFOLIO</h4>
          <h2 className="title">OUR <span className="text-accent">PROJECTS</span></h2>
          <div className="title-underline"></div>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar" style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '15px', 
          marginBottom: '50px' 
        }}>
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => { setFilter(cat.value); setShowAll(true); }}
              className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
              style={{
                background: filter === cat.value ? 'var(--primary-yellow)' : 'transparent',
                color: filter === cat.value ? '#000' : 'var(--text-primary)',
                border: '2px solid var(--primary-yellow)',
                padding: '0.6rem 1.5rem',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '1px',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Loading projects...</p>
          </div>
        ) : (
          <div className="projects-wrapper">
            {displayedProjects.length === 0 ? (
              <div style={{ textAlign: 'center', gridColumn: '1/-1', padding: '40px' }}>
                <p style={{ color: 'var(--text-secondary)' }}>No projects match this category.</p>
              </div>
            ) : (
              displayedProjects.map((project) => (
                <div className="project-row" key={project.id}>

                  <div className="project-visual">
                    <div className="image-reveal-wrapper">
                      <img src={project.image} alt={project.title} className="project-image" />
                      <div className="image-overlay-tint"></div>
                    </div>
                  </div>

                  <div className="project-info">
                    <span className="project-number">{project.id}</span>
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                      <span className="meta-divider">/</span>
                      <span className="project-location">{project.location}</span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <Link
                      to={`/portfolio/${project.id}`}
                      className="explore-link"
                      style={{ textDecoration: 'none' }}
                    >
                      EXPLORE PROJECT
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>

                </div>
              ))
            )}
          </div>
        )}

        {filteredProjects.length > 3 && (
          <div className="view-all-container">
            <button
              className="outline-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'SHOW LESS PROJECTS' : 'VIEW ALL PROJECTS'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;
