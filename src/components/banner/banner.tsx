// Banner.tsx
import React from "react";
import "./banner.css";

interface BannerProps {
  desktopSrc: string;
  mobileSrc: string;
  alt?: string;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ desktopSrc, mobileSrc, alt = "banner", className }) => {
  return (
    <section className={`banner ${className || ""}`}>
      <picture>
        {/* Mobile-first: mobile source for small screens */}
        <source srcSet={mobileSrc} media="(max-width: 768px)" />
        {/* Fallback / desktop */}
        <img src={desktopSrc} alt={alt} className="banner-image" loading="lazy" />
      </picture>
    </section>
  );
};

export default Banner;
