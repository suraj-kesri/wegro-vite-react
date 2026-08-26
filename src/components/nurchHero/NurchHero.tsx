import React from "react";
import "./NurchHero.css";
import { useNavigate } from "react-router-dom";

const NurchHero: React.FC = () => {
  const navigate = useNavigate();

  const handlePreBookClick = () => {
    window.open("https://forms.gle/gjTfyMEB41Svkgv3A", "_blank");
  };

  const handleExploreClick = () => {
    navigate("/nurch");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <section className="nurch-hero">
      <img src='/CG1.png' alt="Nurch Balcony" className="nurch-image" />
      <div className="nurch-overlay">
        <h4 className="nurch-intro">Meet</h4>
        <img className="nurch-logo" src='/nurch-logo.png' alt="Nurch Balcony"  />
        <p className="nurch-subtitle">
          <strong>World&apos;s first</strong> Aeroponics Integrated <br />
          Structural Railing Systems.
        </p>
        <div className="nurch-buttons">
          <button type="button" className="nurch-btn install" onClick={handlePreBookClick}>Order Now</button>
          <button type="button" className="nurch-btn explore" onClick={handleExploreClick}>Explore</button>
        </div>
      </div>
    </section>
  );
};

export default NurchHero;
