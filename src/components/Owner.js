// components/Owner.js
import React from 'react';
import './Owner.css';
import {
  CheckCircle2,
  Coffee,
  Linkedin,
  Github,
  Twitter,
  Mail,
  Music,
  BookOpen,
  Plane,
  Camera,
  Code2
} from 'lucide-react';

const Owner = () => {
  return (
    <section className="owner-container">
      <div className="owner-card">
        <div className="owner-left">
          <img src="/owner.jpg" alt="Chakrapani Upadhyaya" className="owner-image" />
          <div className="coffee-section">
            <h3><Coffee className="coffee-icon" /> Buy Coffee for Chakrapani</h3>
            <p>If you like this project or his work, scan the QR code to support him!</p>
            <img src="/QrCode.jpeg" alt="QR Code" className="qr-code" />
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/chakrapani-upadhyaya" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            <a href="https://github.com/uchakrapani" target="_blank" rel="noopener noreferrer"><Github /></a>
            <a href="https://twitter.com/chakrapani_dev" target="_blank" rel="noopener noreferrer"><Twitter /></a>
            <a href="mailto:chakrapani.upadhyaya@example.com"><Mail /></a>
          </div>
        </div>

        <div className="owner-right">
          <h2 className="owner-name">
            Chakrapani Upadhyaya <CheckCircle2 className="verified-icon" />
            <span className="pronouns">(He/Him)</span>
          </h2>

          <p className="owner-role">Designer & Developer of this Website</p>

          <p className="owner-summary">
            Chakrapani is a passionate software architect and full-stack engineer with over
            <strong> 15 years of experience</strong> building scalable and secure enterprise applications.
            He thrives at the intersection of clean code, cloud-native technologies, and thoughtful user experiences.
          </p>

          <ul className="owner-skills">
            <li>.NET Core, C#, Web API</li>
            <li>ReactJS, SQL Server, NUnit</li>
            <li>AWS (Lambda, CI/CD), Okta SSO</li>
            <li>SonarQube, Git, DevOps</li>
            <li>Enterprise & Cloud-native Best Practices</li>
          </ul>

          <div className="hobbies-section">
            <h3>Hobbies & Interests</h3>
            <ul>
              <li><Music className="hobby-icon" /> Playing Indian Classical Music</li>
              <li><BookOpen className="hobby-icon" /> Reading Tech & Philosophy Books</li>
              <li><Plane className="hobby-icon" /> Traveling & Exploring Culture</li>
              <li><Camera className="hobby-icon" /> Digital Photography</li>
              <li><Code2 className="hobby-icon" /> Building Side Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
