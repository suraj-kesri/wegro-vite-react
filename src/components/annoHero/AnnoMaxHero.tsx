import React from "react";
import "./AnnoHero.css";



const AnnoMaxHero: React.FC = () => {
  

  const handlePreBookClick = () => {
    window.open("https://forms.gle/MWggLGwfgKCBbJpP6", "_blank");
  };

  
  return (
    <section className="anno-hero">
      <img src='/ANNO Ren 2 2.png' alt="Anno Pod" className="anno-image" />
      <div className="anno-overlay">
        
        <img className="anno-logo" src='/anno-MAX.png' alt="anno Max"  />
        <p className="anno-subtitle">
          Grow 74 Plants  <br />
          Footprint: 80cm x43cm (2'7" x 1'5") <br />
          Height: 190cm (6'4") <br /><br />
          Integrated with Special HEPA filters <br />
          to actively purify your indoor air.
        </p>
        <h3 className="anno-price">OFFER PRICE: INR 54,999</h3>
        <div className="anno-buttons">
          <button className="anno-btn install" onClick={handlePreBookClick}>Pre-Book</button>
        </div>
      </div>
    </section>
  );
};

export default AnnoMaxHero;
