import React from "react";

import Banner from "../components/banner/banner";
import Image from "../components/image/image";
import AnnoAirHero from "../components/annoHero/AnnoAirHero";
import AnnoMaxHero from "../components/annoHero/AnnoMaxHero";

const Anno: React.FC = () => {
  return (
    <>
        <Banner
            desktopSrc="/Discount-banner-desktop.png"
            mobileSrc="/Discount-banner-phone.png"
            alt="Banner Discount"
        />
        <AnnoAirHero />
        <Banner
            desktopSrc="/Features-desktop.png"
            mobileSrc="/Features-phone.png"
            alt="Banner features"
        />
        <AnnoMaxHero />
        <Banner
            desktopSrc="/Office-desktop.png"
            mobileSrc="/Office-phone.png"
            alt="Banner office"
        />
        <Banner
            desktopSrc="/Eatery-desktop.png"
            mobileSrc="/Eatery-phone.png"
            alt="Banner eatery"
        />
        <Banner
            desktopSrc="/Everyday-desktop.png"
            mobileSrc="/Everyday-phone.png"
            alt="Banner everyday"
        />
        <Image 
            src="/ANNO Ren 7.png" 
            alt="Family preparing food in kitchen"
        />
    </>
  );
};

export default Anno;
