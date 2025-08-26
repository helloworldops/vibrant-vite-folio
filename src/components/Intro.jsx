import { useEffect, useState } from 'react';
import './Intro.css';

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="intro section">
      <div className="container">
        <div className={`intro-content ${isVisible ? 'fade-in' : ''}`}>
          <div className="intro-image-container scale-in">
              <img 
                src="/src/assets/profile.jpg" 
                alt="Profile" 
                className="intro-image glow-pulse"
              />
          </div>
          <div className="intro-text">
            <h1 className="intro-title">Hello, I'm Alex Johnson</h1>
            <p className="intro-description">
              Full Stack Developer & Creative Problem Solver. I craft beautiful, 
              functional web experiences that make a difference. Passionate about 
              modern technologies and clean, efficient code.
            </p>
            <div className="intro-highlights">
              <span className="highlight-item glass">🚀 Full Stack Developer</span>
              <span className="highlight-item glass">💡 Creative Thinker</span>
              <span className="highlight-item glass">🎯 Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;