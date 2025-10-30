import React from "react";
import "./hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Desktop Image */}
      <img
        src="./src/assets/hero-desktop.png"
        alt="Hero desktop"
        className="hero-image desktop"
      />

      {/* Mobile Image */}
      <img
        src="./src/assets/hero-mobile.png"
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
