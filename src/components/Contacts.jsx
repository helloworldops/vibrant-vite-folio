import './Contacts.css';

const Contacts = () => {
  const contacts = [
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/username',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/username',
      color: '#0077b5'
    },
    {
      name: 'LeetCode',
      icon: '🧩',
      url: 'https://leetcode.com/username',
      color: '#ffa116'
    },
    {
      name: 'GeeksforGeeks',
      icon: '🚀',
      url: 'https://auth.geeksforgeeks.org/user/username',
      color: '#0f9d58'
    },
    {
      name: 'Email',
      icon: '✉️',
      url: 'mailto:your.email@example.com',
      color: '#ea4335'
    }
  ];

  return (
    <section className="contacts section scroll-animate">
      <div className="container">
        <div className="contacts-header text-center">
          <h2>Let's Connect</h2>
          <p className="contacts-subtitle">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>
        <div className="contacts-grid">
          {contacts.map((contact, index) => (
            <a 
              key={index}
              href={contact.url}
              target={contact.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="contact-card glass glass-hover"
              style={{ '--contact-color': contact.color }}
            >
              <div className="contact-icon">{contact.icon}</div>
              <div className="contact-name">{contact.name}</div>
              <div className="contact-glow"></div>
            </a>
          ))}
        </div>
        <div className="contacts-footer">
          <p className="footer-text">
            © 2024 Alex Johnson. Built with React & lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;