import React from "react";
import Banner from "../components/banner/banner";
import NurchHero from "../components/nurchHero/NurchHero";
import AnnoHero from "../components/annoHero/AnnoHero";
import LeafpanelHero from "../components/leafpanelHero/LeafpanelHero";
import Hero from "../components/hero/hero";
import Image from "../components/image/image";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <h1> Our Technologies make Plant Nurturing more adoptable while offering the Highest Convenience: for Greener Cities. </h1>
      <LeafpanelHero />
      
      <AnnoHero />
      <Image 
        src="/ANNO Ren 7.png" 
        alt="Anno indoor farming pod in a living space"
      />
      <NurchHero />
      <Image 
        src="/EDITV2.png" 
        alt="Nurch smart green railing on a balcony"
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
