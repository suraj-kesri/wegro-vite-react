// src/App.tsx
import React from "react";
import "./App.css";
import Footer from "./components/footer/footer.tsx";
import ContactSection from "./components/contact/contactSection.tsx";
import SupportedBy from "./components/supportedBy/supportedBy.tsx";
import Image from "./components/image/image.tsx";
import NurchHero from "./components/nurchHero/NurchHero.tsx";
import Hero from "./components/hero/hero.tsx";
import Banner from "./components/banner/banner.tsx";
import AnnoHero from "./components/annoHero/AnnoHero.tsx";

const App: React.FC = () => {
  return (
    <><><div className="container">
      
    </div>
      <Hero />
      <h1> Our Technologies make Plant Nurturing more adoptable while offering the Highest Convenience: for Greener Cities. </h1>
      <AnnoHero />
      <Image 
        src="/ANNO Ren 7.png" 
        alt="Family enjoying balcony"
      />
      <NurchHero />
      <Image 
        src="/EDITV2.png" 
        alt="Family enjoying balcony"
      />
      <Banner />
      <SupportedBy />
      <ContactSection />
      </><Footer />
      
    </>
  );
};

export default App;
