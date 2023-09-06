import React from 'react';
import { MainRouter } from './router/MainRouter';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Carrusel } from './components/Carrusel';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <MainRouter />
      
      <Footer />
    </>
  );
};

export default App;
