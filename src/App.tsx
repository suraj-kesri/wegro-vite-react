// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import Header from "./components/header/Header.tsx";
import Home from "./pages/Home";
import Anno from "./pages/Anno";
import Nurch from "./pages/Nurch.tsx";
import Leafpanel from "./pages/Leafpanel.tsx";
import OurStory from "./pages/OurStory.tsx";
import Footer from "./components/footer/footer.tsx";
import ContactSection from "./components/contact/contactSection.tsx";
import SupportedBy from "./components/supportedBy/supportedBy.tsx";



const App: React.FC = () => {
  return (
    <>

      <ScrollToTop />
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anno" element={<Anno />} />
        <Route path="/nurch" element={<Nurch />} />
        <Route path="/leafpanel" element={<Leafpanel />} />
        <Route path="/ourstory" element={<OurStory/>} />
      </Routes>
      
      <SupportedBy />
      <section id="contact">
        <ContactSection />
      </section>
      
      <Footer />
      
    </>
  );
};

export default App;
