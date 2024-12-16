import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { CartBlock } from "../cart-block";

export const Header = () => {
  const handleScrollToAbout = () => {
    const aboutImage = document.getElementById('about-image');
    aboutImage?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="header">
        <div className="header-content">
          <img
            src="/covers/Remove-bg.ai_1732696072596 1.png"
            alt="Логотип"
            className="header-logo"
          />
          <nav className="header-nav">
            <button onClick={handleScrollToAbout} className="nav-link">О нас</button>
            <button onClick={handleScrollToProducts} className="nav-link">Товары</button>
          </nav>
          <div className="cart-container">
            <CartBlock />
          </div>
        </div>
      </div>
      <div id="about-image" className="background-image">
        <div id="about-text" className="about-text">
          <h1>О нас</h1>
          <p>
            Добро пожаловать в Raxat — ваш надежный партнер в мире спортивных товаров! Мы — команда энтузиастов, объединенных общей страстью к спорту и активному образу жизни. Наша миссия — предоставить вам высококачественные товары, которые помогут достичь ваших спортивных целей и сделать каждую тренировку максимально комфортной и эффективной.
          </p>
        </div>
      </div>

      <div id="products" className="products-section">
        <h2>Товары</h2>
      </div>
    </>
  );
};
