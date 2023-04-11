import React from 'react';
import s from './companies.module.scss';
import StackIcon from '@/public/assets/icons/stack.svg';
import Image from 'next/image';
import { Typography } from '@mui/material';
import Comp1 from '@/public/assets/images/Shire.png';
import Comp2 from '@/public/assets/images/Trade.png';
import Comp3 from '@/public/assets/images/Zuns.png';
import clsx from 'clsx';

const companiesData = [
  {
    img: Comp1,
    title: 'Lorem ipsum dolor sit amet,',
    text: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet,
          aperiam assumenda corporis cum cupiditate delectus deleniti dolore
          doloribus eaque, iusto molestias non officia omnis, perferendis rerum ut voluptate?
        `,
    address: {},
  },
  {
    img: Comp2,
    title: 'Lorem ipsum dolor sit amet,',
    text: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet,
          aperiam assumenda corporis cum cupiditate delectus deleniti dolore
          doloribus eaque, iusto molestias non officia omnis, perferendis rerum ut voluptate?
        `,
    address: {},
  },
  {
    img: Comp3,
    title: 'Lorem ipsum dolor sit amet,',
    text: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet,
          aperiam assumenda corporis cum cupiditate delectus deleniti dolore
          doloribus eaque, iusto molestias non officia omnis, perferendis rerum ut voluptate?
        `,
    address: {},
  },
];

const Companies = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header>
          <div className={s.icon}>
            <Image src={StackIcon} alt="companies icon" />
          </div>

          <div className={s.title_txt}>
            <Typography className={s.title_txt_sub} variant="body1">
              <span>{'//'}</span>
              02 . companies
            </Typography>

            <Typography variant="h3">
              Browse Our Growing
              <br />
              Companies
            </Typography>
          </div>
        </header>

        <main className={s.main}>
          {companiesData.map(({ img, title, text }) => (
            <section key={title} className={s.section}>
              <div className={s.left}>
                <div className={s.comp_img}>
                  <Image src={img} alt="companies logo" />
                </div>
              </div>
              <div className={clsx([s.right])}>
                <div className={s.comp_txt}>
                  <Typography variant="h5"> {title} </Typography>
                  <Typography> {text} </Typography>
                </div>

                <div className={s.comp_address}>
                  <Typography variant="h5"> ADDRESS </Typography>
                  <Typography>++251911213001</Typography>
                  <Typography> Location of the office </Typography>
                  <Typography>Email@Company.com</Typography>
                </div>
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Companies;
