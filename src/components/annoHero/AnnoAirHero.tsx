import React from "react";
import "./AnnoHero.css";



const AnnoAirHero: React.FC = () => {
  

  const handlePreBookClick = () => {
    window.open("https://forms.gle/MWggLGwfgKCBbJpP6", "_blank");
  };

  
  return (
    <section className="anno-hero">
      <img src='/ANNO Ren 1 1.png' alt="Anno Pod" className="anno-image" />
      <div className="anno-overlay">
        
        <img className="anno-logo" src='/anno-AIR.png' alt="anno Air"  />
        <p className="anno-subtitle">
          Grow 44 Plants  <br />
          Footprint: 80cm x 43cm - 2'7" x 1'5" <br />
          Height: 160cm 5'3" <br /><br />
          Integrated with Special HEPA filters <br />
          to actively purify your indoor air.
        </p>
        <h3 className="anno-price">OFFER PRICE: INR 74,999</h3>
        <div className="anno-buttons">
          <button className="anno-btn install" onClick={handlePreBookClick}>Pre-Book</button>
        </div>
      </div>
    </section>
  );
};

export default AnnoAirHero;
