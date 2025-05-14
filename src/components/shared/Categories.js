// Categories.js
import React from 'react';
import './Categories.css';
import { FaRocket, FaInfinity, FaEnvelopeOpenText } from 'react-icons/fa';

const Categories = () => {
  const features = [
    {
      icon: <FaRocket className="cat-icon" />,
      title: 'Instant Create',
      tagline: 'Create certificates in seconds',
      description: 'With just a few clicks, generate high-quality certificates instantly. No technical skills required.'
    },
    {
      icon: <FaInfinity className="cat-icon" />,
      title: 'Free Forever',
      tagline: 'No hidden charges or fees',
      description: 'Our certificate generation service is completely free – now and always. Unlimited usage guaranteed.'
    },
    {
      icon: <FaEnvelopeOpenText className="cat-icon" />,
      title: 'Download & Mail Support',
      tagline: 'Access anytime, anywhere',
      description: 'Download your certificate or email it to anyone instantly. Share achievements with ease.'
    }
  ];

  return (
    <section className="categories">
      <h2 className="categories-heading">Why Choose Shrash-Tech?</h2>
      <p className="categories-subtitle">★ Create certificates instantly, for free, and share them anytime ★</p>
      <div className="categories-grid">
        {features.map((feature, index) => (
          <div key={index} className="category-card">
            <div className="icon-wrapper">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <small>{feature.tagline}</small>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;


/* Categories.css */
