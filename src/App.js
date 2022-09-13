import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, GalleryP, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    {/* <Intro /> */}
    {/* <Laurels /> */}
    <Gallery />
    <GalleryP/>
    <FindUs />
    <Footer />
  </div>
);

export default App;
