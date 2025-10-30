// src/App.tsx
import React from "react";
import "./App.css";
import Footer from "./components/footer/footer.tsx";
import ContactSection from "./components/contact/contactSection.tsx";
import SupportedBy from "./components/supportedBy/supportedBy.tsx";
import Image from "./components/image/image.tsx";
import NurchHero from "./components/nurchHero/NurchHero.tsx";
import Hero from "./components/hero/Hero.tsx";

const App: React.FC = () => {
  return (
    <><><div className="container">
      
    </div>
      <Hero />
      <NurchHero />
      <Image />
      <SupportedBy />
      <ContactSection />
      </><Footer />
      
    </>
  );
};

export default App;
