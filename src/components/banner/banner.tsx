import React from "react";
import "./banner.css";

const Banner: React.FC = () => {
  return (
    <section className="banner">
      {/* Desktop banner */}
      <img
        src="/banner-desktop.png"
        alt="Desktop banner"
        className="banner-image desktop"
      />

      {/* Mobile banner */}
      <img
        src="/banner-mobile.png"
        alt="Mobile banner"
        className="banner-image mobile"
      />
    </section>
  );
};

export default Banner;
