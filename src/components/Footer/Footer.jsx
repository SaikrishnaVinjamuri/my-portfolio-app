import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2023 Sai Krishna Vinjamuri. All rights reserved.</p>
      <div className="contact-info">
        <p>Email: <a href="mailto:saikrishna.calstate@gmail.com">saikrishna.calstate@gmail.com</a></p>
        <p>Phone: <a href="tel:+19093728482">+1 (909) 372-8482</a></p>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sai-krishna-vinjamuri-756b2721b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/SaikrishnaVinjamuri" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
