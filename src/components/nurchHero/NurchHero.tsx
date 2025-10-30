import React from "react";
import "./NurchHero.css";

const NurchHero: React.FC = () => {
  return (
    <section className="nurch-hero">
      <img src='.\src\assets\Nurch\CG1.png' alt="Nurch Balcony" className="nurch-image" />
      <div className="nurch-overlay">
        <h4 className="nurch-intro">Meet</h4>
        <img className="nurch-logo" src='.\src\assets\logos\nurch-logo.png' alt="Nurch Balcony"  />
        <p className="nurch-subtitle">
          World's first <strong></strong> Aeroponics Integrated <br />
          Structural Railing Systems.
        </p>
        <div className="nurch-buttons">
          <button className="nurch-btn install">Order Now</button>
          <button className="nurch-btn explore">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default NurchHero;
