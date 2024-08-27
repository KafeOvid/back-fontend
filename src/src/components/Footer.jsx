import React from 'react';
import '../styles/Footer.css'; // Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: contact@india.gov.in</p>
          <p>Phone: +91-123-456-7890</p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Use</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <a href="https://twitter.com/india" target="_blank" rel="noopener noreferrer">Twitter</a>
          <br></br>
          <a href="https://facebook.com/india" target="_blank" rel="noopener noreferrer">Facebook</a>
          <br></br>
          <a href="https://linkedin.com/company/india" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} india.gov.in. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
