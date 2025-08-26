import './Contacts.css';

const Contacts = () => {
  const contacts = [
    {
      name: 'GitHub',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      url: 'https://github.com/username',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
      url: 'https://linkedin.com/in/username',
      color: '#0077b5'
    },
    {
      name: 'LeetCode',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
      url: 'https://leetcode.com/username',
      color: '#ffa116'
    },
    {
      name: 'GeeksforGeeks',
      logo: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png',
      url: 'https://auth.geeksforgeeks.org/user/username',
      color: '#0f9d58'
    },
    {
      name: 'Email',
      logo: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
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
              className="contact-link"
              style={{ '--contact-color': contact.color }}
            >
              <img 
                src={contact.logo}
                alt={`${contact.name} logo`}
                className="contact-logo"
              />
              <span className="contact-name">{contact.name}</span>
            </a>
          ))}
        </div>
        <div className="contacts-footer">
          <p className="footer-text">
            Always ready to learn and connect 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;