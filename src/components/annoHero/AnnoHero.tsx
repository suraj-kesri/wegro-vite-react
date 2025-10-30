import React from "react";
import "./AnnoHero.css";

const AnnoHero: React.FC = () => {
  return (
    <section className="anno-hero">
      <img src='/ANNO Ren 1 1.png' alt="Anno Pod" className="anno-image" />
      <div className="anno-overlay">
        <h4 className="anno-intro">Introducing</h4>
        <img className="anno-logo" src='/anno-logo.png' alt="anno Balcony"  />
        <p className="anno-subtitle">
          Advanced Farming Pods with  <br />
          Active Air Purification for 
          <strong> better Urban living.</strong>
        </p>
        <div className="anno-buttons">
          <button className="anno-btn install">Pre-Book</button>
          <button className="anno-btn explore">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default AnnoHero;
