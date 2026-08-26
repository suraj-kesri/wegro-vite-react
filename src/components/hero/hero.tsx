import React from "react";
import "./hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Desktop Image */}
      <img
        src="/hero-desktop.png"
        alt="Hero desktop"
        className="hero-image desktop"
      />

      {/* Mobile Image */}
      <img
        src="/hero-mobile.png"
        alt="Hero mobile"
        className="hero-image mobile"
      />

      {/* Optional text overlay */}
      <div className="hero-content">
        
      </div>
    </section>
  );
};

export default Hero;
