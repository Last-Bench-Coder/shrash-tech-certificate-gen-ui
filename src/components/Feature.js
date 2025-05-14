import React from 'react';
import './Feature.css';

const Feature = () => {
  return (
    <section className="feature-section">
      <div className="feature-container">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3>Free Forever</h3>
            <p>Generate and download professional certificates without spending a single rupee.</p>
          </div>
          <div className="feature-box">
            <h3>Instant PDF Download</h3>
            <p>Create a certificate and download it instantly in high-quality PDF format.</p>
          </div>
          <div className="feature-box">
            <h3>Email Support</h3>
            <p>Send certificates via email directly from the app—no extra tools needed.</p>
          </div>
          <div className="feature-box">
            <h3>Custom Templates</h3>
            <p>Choose from a wide variety of pre-designed, elegant certificate templates.</p>
          </div>
          <div className="feature-box">
            <h3>Responsive Design</h3>
            <p>Access and use our generator from any device—mobile, tablet, or desktop.</p>
          </div>
          <div className="feature-box">
            <h3>No Registration Required</h3>
            <p>Start creating certificates instantly—no login or sign-up required.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;