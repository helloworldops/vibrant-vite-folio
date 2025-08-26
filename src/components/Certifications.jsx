import { certificationsData } from '../data/Certifications';
import './Certifications.css';

const Certifications = () => {
  return (
    <section className="certifications section scroll-animate">
      <div className="container">
        <div className="certifications-header text-center">
          <h2>Certifications</h2>
          <p className="certifications-subtitle">
            Professional certifications and achievements
          </p>
        </div>
        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <div key={index} className="certification-card glass glass-hover">
              <div className="certification-header">
                <div className="certification-institute">{cert.institute}</div>
                <div className="certification-date">{cert.date}</div>
              </div>
              <h3 className="certification-title">{cert.title}</h3>
              <p className="certification-description">{cert.description}</p>
              <div className="certification-badge">
                <span className="badge-icon">🏆</span>
                <span className="badge-text">Certified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;