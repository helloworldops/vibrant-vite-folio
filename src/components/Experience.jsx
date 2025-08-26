import { experienceData } from '../data/Experience';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience section scroll-animate">
      <div className="container">
        <div className="experience-header text-center">
          <h2>Professional Experience</h2>
          <p className="experience-subtitle">
            My journey through different roles and companies
          </p>
        </div>
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-item glass">
              <div className="experience-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="experience-content">
                <div className="experience-duration">{exp.duration}</div>
                <h3 className="experience-designation">{exp.designation}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <div className="experience-location">📍 {exp.location}</div>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;