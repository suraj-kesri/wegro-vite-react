import React from "react";
import "./LeafpanelHero.css";
import { useNavigate } from "react-router-dom";

const LeafpanelHero: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/leafpanel");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOrderClick = () => {
    window.open("https://forms.gle/huRMTgAdArwFu6pj6", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="leafpanel-home-hero">
      <img
        src="/leafpanel/lp hero.png"
        alt="Leafpanel indoor green wall"
        className="leafpanel-home-image"
      />
      <div className="leafpanel-home-overlay">
        <p className="leafpanel-home-intro">Meet</p>
        <h2 className="leafpanel-home-title">Leafpanel</h2>
        <p className="leafpanel-home-subtitle">
          Smart plug-and-play greenwalls for healthier, greener spaces.
        </p>
        <div className="leafpanel-home-buttons">
          <button type="button" className="leafpanel-home-btn order" onClick={handleOrderClick}>
            Order Now
          </button>
          <button type="button" className="leafpanel-home-btn explore" onClick={handleExploreClick}>
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeafpanelHero;
