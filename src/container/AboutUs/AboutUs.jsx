import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.E} alt="G_overlay" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">О нас</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">EASY STUDIO - всегда работает на результат. Для нас каждый клиент - это индивидуальный подход, который формирует новый опыт и приносит огромное удовольствие от того, что мы делаем.Будем рады пополнить наше портфолио эскизом именно Вашей татуировки, даже если это маленькая тату надпись.</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.flow} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">История</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Тату — это искусство росписи на теле. Большие или маленькие, черно-белые или цветные, уникальные и индивидуальные эскизы татуировок могут создать мастер салона  EASY STUDIO  и трансформировать их в красивые нательные рисунки.  Обращайтесь к нам, и мы украсим ваше тело. </p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;