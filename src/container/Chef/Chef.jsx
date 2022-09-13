import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Мастер" />
      <h1 className="headtext__cormorant">Наталия</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Занимаюсь тату ремеслом уже более 10 лет. А восхищаться искусством татуировки начала гораздо раньше. Это и повлияло на выбор моей будущей профессии.</p>
        </div>
        <p className="p__opensans">  Работаю в основном в контрастной ч / б стилистике с дарксайдовыми сюжетами, реализм, но всегда рад сделать зомби или пикачу. Хотите что-то особенное? Я помогу!</p>
      </div>

      
    </div>
  </div>
);

export default Chef;