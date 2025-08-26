import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projectsData } from '../data/Projects';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  if (!project) {
    return (
      <div className="loading-container">
        <div className="loading-spinner glass">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details">
      <div className="project-details-header">
        <Link to="/" className="back-button glass glass-hover">
          ← Back to Portfolio
        </Link>
      </div>

      <div className="container">
        <div className="project-details-content fade-in">
          <div className="project-hero">
            <div className="project-images-section">
              <div className="main-image-container">
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="main-project-image"
                />
                <button 
                  className="image-nav prev-btn glass glass-hover"
                  onClick={prevImage}
                >
                  ‹
                </button>
                <button 
                  className="image-nav next-btn glass glass-hover"
                  onClick={nextImage}
                >
                  ›
                </button>
                <div className="image-indicators">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
              <div className="thumbnail-gallery">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className="project-info glass">
              <div className="project-meta">
                <span className="project-date">{project.date}</span>
              </div>
              <h1 className="project-title">{project.title}</h1>
              <p className="project-full-description">{project.fullDescription}</p>
              
              <div className="project-tech-section">
                <h3>Technologies Used</h3>
                <div className="project-tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links-section">
                <h3>Project Links</h3>
                <div className="project-action-links">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link github-link glass glass-hover"
                  >
                    <span className="link-icon">💻</span>
                    View on GitHub
                  </a>
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-link demo-link glass glass-hover"
                    >
                      <span className="link-icon">🚀</span>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;