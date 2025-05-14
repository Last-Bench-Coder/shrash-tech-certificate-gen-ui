import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Hero.css";

const typingText = "Welcome to Shrash-Tech Certificate Generator";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + typingText.charAt(index));
        setIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      // Disable cursor after typing is complete
      setTimeout(() => setShowCursor(false), 500);
    }
  }, [index]);

  return (
    <section className="hero-section">
      <h1 className="hero-title">
        {typedText}
        <span className={`cursor ${showCursor ? "" : "hidden"}`}>|</span>
      </h1>
      <p className="hero-subtitle">Generate, download, and email your certificates – free and instant!</p>
      <Link to="/gen-certificate" className="hero-btn">Generate Certificate</Link>
    </section>
  );
};

export default Hero;
