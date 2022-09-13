import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Бить или не бить " />
      <h1 className="app__header-h1">Easy Tattoo Studio</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Что роднит татуировку и книгу? Чернила, скажете вы, и будете правы. Но есть ещё кое-что: рисунки на коже и книжные истории таят в себе глубокие смыслы.</p>
      {/* <button type="button" className="custom__button">Узнать Больше</button> */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;