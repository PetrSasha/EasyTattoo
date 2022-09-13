import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiLightSabers } from 'react-icons/gi';
import { FiFacebook, FiPhone, FiInstagram } from 'react-icons/fi';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  
  //   function stopDefAction(evt) {
  //     evt.preventDefault();

  //     document.getElementById('ev').addEventListener(
  //       'click', stopDefAction, false
  //   );
  // }
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.navlogo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Главная</a></li>
        <li className="p__opensans"><a href="#about">О нас</a></li>
        <li className="p__opensans"><a href="#menu">Услуги</a></li>
        <li className="p__opensans"><a href="#gallery">Галерея</a></li>
        <li className="p__opensans"><a href="#contact">Контакты</a></li>
      </ul>
      <div className="app__navbar-login">
        
        <a href='#login' className="p__opensans">Записаться</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <GiLightSabers fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Главная</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>О нас</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Услуги</a></li>
              <li><a href="#gallery" onClick={() => setToggleMenu(false)}>Услуги</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Контакты</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;