import { useEffect, useRef } from 'react';
import { techStackData } from '../data/TechStack';
import './TechStack.css';

const TechStack = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.tech-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.2 });

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="techstack section scroll-animate">
      <div className="container">
        <div className="techstack-header text-center">
          <h2>Technical Skills</h2>
          <p className="techstack-subtitle">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </div>
        <div className="techstack-grid" ref={gridRef}>
          {techStackData.map((tech, index) => (
            <div key={index} className="tech-card glass glass-hover">
              <h3 className="tech-name">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;