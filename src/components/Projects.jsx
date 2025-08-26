import { Link } from 'react-router-dom';
import { projectsData } from '../data/Projects';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects section scroll-animate">
      <div className="container">
        <div className="projects-header text-center">
          <h2>Featured Projects</h2>
          <p className="projects-subtitle">
            A showcase of my recent work and creative solutions
          </p>
        </div>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={project.id} className="project-card glass glass-hover">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      🔗 GitHub
                    </a>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link demo-link"
                      >
                        🚀 Demo
                      </a>
                    )}
                    <Link 
                      to={`/project/${project.id}`}
                      className="project-link details-link"
                    >
                      📋 Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-date">{project.date}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;