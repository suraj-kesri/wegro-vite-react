// src/App.tsx
import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>About Wegro</h1>
      <p>
        At <span className="highlight">Wegro</span>, we believe city living shouldn’t mean losing touch with nature. Our mission is simple: bring farming back into urban homes, not as a chore, but as a lifestyle upgrade.
      </p>
      <p className="notice">
        Our website is currently under repair. Meanwhile, you can connect with us directly on WhatsApp.
      </p>
      <div className="cta">
        <a href="https://wa.me/YOUR_NUMBER_HERE" target="_blank" rel="noopener noreferrer">
          <span>Connect on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default App;
