import React from 'react';
import s from './home.module.scss';
import Hero from '@/scenes/Home/Hero';
import Companies from '@/scenes/Home/Companies';
import Missions from '@/scenes/Home/Missions';
import About from '@/scenes/Home/About';
import Products from '@/scenes/Home/ProductsSection';
import Video from '@/scenes/Home/Video';
import CompaniesCards from '@/scenes/Home/CompaniesCards';

const Home = () => {
  return (
    <div className={s.container}>
      <Hero />

      <About />

      <Missions />

      <div className="company_info_container">
        <CompaniesCards />

        <Companies />
      </div>

      <Video />

      <Products />
    </div>
  );
};

export default Home;
