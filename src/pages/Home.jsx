import { useEffect } from 'react';
import Intro from '../components/Intro';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contacts from '../components/Contacts';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <Intro />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contacts />
    </div>
  );
};

export default Home;