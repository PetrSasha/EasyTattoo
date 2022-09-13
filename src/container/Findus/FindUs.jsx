import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Контакты" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Мы тут</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Мы всегда рады вам </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Часы работы </p>
        <p className="p__opensans">Пн -- Пт с 9.00 до 22.00</p>
        <p className="p__opensans">Сб -- Вс с 11.00 до 20.00</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Найти нас</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.map} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;