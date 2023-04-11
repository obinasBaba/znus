import React from 'react';
import s from './aboutus.module.scss';
import Header from '@/scenes/AboutUs/Header';
import Intro from '@/scenes/AboutUs/Intro';
import WhyWe from '@/scenes/AboutUs/WhyWe';

const AboutUs = () => {
  return (
    <div className={s.container}>
      <Header />

      <Intro />

      <WhyWe />
    </div>
  );
};

export default AboutUs;
