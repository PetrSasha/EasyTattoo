import React from 'react';
import { FiFacebook, FiPhone, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">связаться с нами </h1>
        <p className="p__opensans">Город Запорожье , улица жаботинского 32</p>
        <p className="p__opensans">+380935201960</p>
        <p className="p__opensans">+380935201960</p>
      </div>

      <div className="app__footer-links_logo">
      <h1 className="app__footer-headtext">Easy Tattoo Studio</h1>
        <p className="p__opensans">&quot;Лучший способ найти себя — это потерять себя в служении другим.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiPhone />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Рабочие часы</h1>
        <p className="p__opensans">Понедельник -- Пятница:</p>
        <p className="p__opensans">09:00 - 22:00 </p>
        <p className="p__opensans">Суббота -- Воскресенье:</p>
        <p className="p__opensans">10:00 - 21:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 EASY TATTOO STUDIO. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;