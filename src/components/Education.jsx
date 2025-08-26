import { educationData } from '../data/Education';
import './Education.css';

const Education = () => {
  return (
    <section className="education section scroll-animate">
      <div className="container">
        <div className="education-header text-center">
          <h2>Education</h2>
          <p className="education-subtitle">
            Academic background and continuous learning journey
          </p>
        </div>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card glass glass-hover">
              <div className="education-score-badge">{edu.score}</div>
              <div className="education-content">
                <div className="education-duration">{edu.duration}</div>
                <h3 className="education-course">{edu.course}</h3>
                <h4 className="education-institute">{edu.institute}</h4>
                <p className="education-description">{edu.description}</p>
              </div>
              <div className="education-gradient-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;