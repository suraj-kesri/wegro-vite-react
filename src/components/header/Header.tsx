import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "/wegro-logo-white.svg"; // adjust path if needed

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={handleExploreClick}>
          <img src={logo} alt="Wegro logo light" />
        </div>

        {/* Hamburger Icon */}
        <button
          type="button"
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
        </button>

        {/* Navigation */}
        <nav
          id="primary-navigation"
          className={`nav ${menuOpen ? "open" : ""}`}
          aria-label="Main"
        >
          <ul className="links">
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/anno" onClick={closeMenu}>Anno</Link>
            </li>
            <li>
              <Link to="/nurch" onClick={closeMenu}>Nurch</Link>
            </li>
            <li>
              <Link to="/ourstory" onClick={closeMenu}>Our Story</Link>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
