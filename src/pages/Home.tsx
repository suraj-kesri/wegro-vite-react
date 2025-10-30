import React from "react";
import Banner from "../components/banner/banner";
import NurchHero from "../components/nurchHero/NurchHero";
import AnnoHero from "../components/annoHero/AnnoHero";
import Hero from "../components/hero/hero";
import Image from "../components/image/image.tsx";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <h1> Our Technologies make Plant Nurturing more adoptable while offering the Highest Convenience: for Greener Cities. </h1>
      <AnnoHero />
      <Image 
        src="/ANNO Ren 7.png" 
        alt="Family preparing food in kitchen"
      />
      <NurchHero />
      <Image 
        src="/EDITV2.png" 
        alt="Family enjoying balcony"
      />
      <Banner
        desktopSrc="/banner-desktop.png"
        mobileSrc="/banner-mobile.png"
        alt="Marketplace announcement"
      />
    </>
  );
};

export default Home;
