import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section logo-section">
          <div className="footer-logo">Shrash-Tech</div>
          <p>Free, instant certificate generation for everyone. Create. Download. Email. Anytime.</p>
        </div>

        <div className="footer-section links-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section privacy-section">
          <h4>Data Privacy</h4>
          <p>Your information is safe with us. We don’t share anyones certificates or personal data to any third party vendors. Your data is 100% secure and private.</p>
          <a href="#privacy" className="privacy-link">Read our Privacy Policy</a>
        </div>

        <div className="footer-section social-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Instagram /></a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shrash-Tech. All rights reserved. Designed</p>
        <div className="go-top" onClick={scrollToTop} title="Go to Top">
          <ArrowUp size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
