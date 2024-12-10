import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  const handleScrollToAbout = () => {
    const aboutImage = document.getElementById("about-image");
    aboutImage?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToProducts = () => {
    const productsSection = document.getElementById("products");
    productsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="/covers/Remove-bg.ai_1732696072596 1.png"
            alt="Footer Logo"
          />
        </div>
        <nav className="footer-nav">
          <button onClick={handleScrollToAbout} className="footer-link">
            О нас
          </button>
          <button onClick={handleScrollToProducts} className="footer-link">
            Товары
          </button>
        </nav>
        <div className="footer-info">
          <p>© 2024 Raxat. All Rights Reserved.</p>
          <p>Follow us on <a href="">Facebook</a>, <a href="http://twitter.com">X</a>, and <a href="instagram.com">Instagram</a>.</p>
        </div>
      </div>
    </footer>
  );
};
