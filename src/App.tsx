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
      <AnnoHero />
      <Image 
        src="./src/assets/Anno/ANNO Ren 7.png" 
        alt="Family enjoying balcony"
      />
      <NurchHero />
      <Image 
        src="./src/assets/Nurch/EDITV2.png" 
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
