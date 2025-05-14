import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="how-it-works-subtitle">
          <span className="star-icon">★</span>
          It’s easy and instant! Just fill in the details, preview your
          certificate, and download or send it with one click.
          <span className="star-icon">★</span>
        </p>
        <div className="content">
          <div className="image">
            <img
              src="how_it_works.png" // Replace with a real image URL
              alt="How it works"
            />
          </div>
          <div className="steps">
            <div className="step">
              <h3>Choose Your Template</h3>
              <p>
                Select from a variety of certificate templates to match your
                needs.
              </p>
            </div>
            <div className="step">
              <h3>Customize Your Certificate</h3>
              <p>
                Personalize your certificate with your details and branding.
              </p>
            </div>
            <div className="step">
              <h3>Download & Share</h3>
              <p>Download your certificate instantly or share it via email.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
