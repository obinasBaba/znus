import React from 'react';
import s from './missions.module.scss';
import { Typography } from '@mui/material';
import Bg from '@/public/assets/images/Zunnn-bg.png';

const ourMission = [
  {
    title: 'Lorem ipsum dolor',
    desc: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        doloribus esse eveniet fugit placeat rerum! Id ipsa ipsam perferendis
        temporibus!`,
  },
  {
    title: 'Lorem ipsum dolor',
    desc: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        doloribus esse eveniet fugit placeat rerum! Id ipsa ipsam perferendis
        temporibus!`,
  },
  {
    title: 'Lorem ipsum dolor',
    desc: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        doloribus esse eveniet fugit placeat rerum! Id ipsa ipsam perferendis
        temporibus!`,
  },
];

const Missions = () => {
  return (
    <div className={s.container}>
      <div className={s.bg} style={{ backgroundImage: `url(${Bg.src})` }} />

      <div className={s.wrapper}>
        <div className={s.missions} data-scroll={true} data-scroll-speed={1}>
          <header>
            <Typography variant="body1">Our Mission</Typography>
            <Typography variant="h2">To Grow & Prosper</Typography>
          </header>

          <ul>
            <Typography>Thorney aims to:</Typography>

            <li>
              Deliver consistent outperformance of the market over the medium to
              long term
            </li>
            <li>Invest in companies which have strong management</li>
            <li>
              Target companies where management have skin in the game, that have
              a viable and scalable business model and a desire for scale and
              growth.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Missions;
