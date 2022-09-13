import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Что мы можем " />
      <h1 className="headtext__cormorant">Услуги</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Тату</p>
        <div className="app__specialMenu_menu_items">
          {data.tattoo.map((tattoo, index) => (
            <MenuItem key={tattoo.title + index} title={tattoo.title} price={tattoo.price} tags={tattoo.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.skel} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Макияж</p>
        <div className="app__specialMenu_menu_items">
          {data.makeup.map((makeup, index) => (
            <MenuItem key={makeup.title + index} title={makeup.title} price={makeup.price} tags={makeup.tags} />
          ))}
        </div>
      </div>
    </div>

   
  </div>
);

export default SpecialMenu;