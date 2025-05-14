import React, { useState } from 'react';
import './Header.css';
import { Menu, X, Home, Info, Phone, User, Sparkles, FileBadge } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">Shrash-Tech</Link>
      </div>

      <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <Home size={18} className="nav-icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/features" onClick={() => setMobileMenuOpen(false)}>
              <Sparkles size={18} className="nav-icon" /> Features
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              <Info size={18} className="nav-icon" /> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Phone size={18} className="nav-icon" /> Contact
            </Link>
          </li>
          <li>
            <Link to="/owner" onClick={() => setMobileMenuOpen(false)}>
              <User size={18} className="nav-icon" /> Meet Owner
            </Link>
          </li>
          <li>
            <Link to="/gen-certificate" className="create-btn">
              <FileBadge size={16} className="nav-icon" /> Generate Certificate
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </header>
  );
};

export default Header;
