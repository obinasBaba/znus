import React from 'react';
import s from './home.module.scss';
import Hero from '@/scenes/Home/Hero';
import Companies from '@/scenes/Home/Companies';
import Missions from '@/scenes/Home/Missions';
import About from '@/scenes/Home/About';

const Home = () => {
  return (
    <div className={s.container}>
      <Hero />
      <About />

      <Missions />

      <Companies />
    </div>
  );
};

export default Home;
