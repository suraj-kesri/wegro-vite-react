import React from "react";
import "./AnnoHero.css";
import { useNavigate } from "react-router-dom";


const AnnoHero: React.FC = () => {
  const navigate = useNavigate();

  const handlePreBookClick = () => {
    window.open("https://forms.gle/MWggLGwfgKCBbJpP6", "_blank");
  };

  const handleExploreClick = () => {
    navigate("/anno");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
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
          <button type="button" className="anno-btn install" onClick={handlePreBookClick}>Pre-Book</button>
          <button type="button" className="anno-btn explore" onClick={handleExploreClick}>Explore</button>
        </div>
      </div>
    </section>
  );
};

export default AnnoHero;
