import React, { useEffect, useRef, useState } from 'react';
import s from './companies.module.scss';
import Image from 'next/image';
import { Button, Stack, Typography } from '@mui/material';
import Comp1 from '@/public/assets/images/Shire.png';
import Comp2 from '@/public/assets/images/Trade.png';
import Comp3 from '@/public/assets/images/Zuns.png';
import clsx from 'clsx';
import { useLocomotiveScroll } from '@/components/commons/layout/LocoMotive';
import gsap from 'gsap';
import ST from 'gsap/dist/ScrollTrigger';

const companiesData = [
  {
    img: Comp1,
    title: 'Lorem ipsum dolor sit amet,',
    text: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet,
          aperiam assumenda corporis cum cupiditate delectus deleniti dolore
          aperiam assumenda corporis cum cupiditate delectus deleniti dolore
          aperiam assumenda corporis cum cupiditate delectus deleniti dolore
          aperiam assumenda corporis cum cupiditate delectus deleniti dolore
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
          aperiam assumenda corporis cum cupiditate delectus deleniti dolore
          aperiam assumenda corporis cum cupiditate delectus deleniti dolore
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
          aperiam assumenda corporis cum cupiditate delectus deleniti dolore
          aperiam assumenda corporis cum cupiditate delectus deleniti dolore
          aperiam assumenda corporis cum cupiditate delectus deleniti dolore
          doloribus eaque, iusto molestias non officia omnis, perferendis rerum ut voluptate?
        `,
    address: {},
  },
];

const StImagesId = 'company-info-st';

const Companies = () => {
  const render = useRef(0);
  const { isStReady } = useLocomotiveScroll();
  const [activeSection, setActiveSection] = useState(1);
  const colors = ['#1AA74B', '#8D39F8', '#F84F39'];

  useEffect(() => {
    const cContainer: HTMLElement = document.querySelector(
      '.company_info_container',
    ) as any;

    const cb = () => {
      ST.killAll();

      companiesData.map((_, idx) => {
        gsap.to(cContainer, {
          // backgroundColor: colors[idx],
          // duration: 2,
          scrollTrigger: {
            id: StImagesId,
            trigger: `.company-${idx + 1}`,
            scroller: '[data-scroll-container]', // scrub: 2,
            start: () => 'top 65%',
            end: () => 'bottom 100%',

            onEnter: ({ progress, direction, isActive }) => {
              console.log('onEnter : ', idx, progress, direction, isActive);
              gsap.to(cContainer, {
                backgroundColor: colors[idx],
                duration: 2,
              });
            },

            onLeaveBack: ({ progress, direction, isActive }) => {
              console.log('onLeaveBack : ', idx, progress, direction, isActive);
              if (idx === 0) {
                gsap.to(cContainer, {
                  backgroundColor: 'white', // display: 'none',
                  duration: 2,
                });
              } else {
                gsap.to(cContainer, {
                  backgroundColor: colors[idx - 1], // display: 'none',
                  duration: 2,
                });
              }
            },

            // markers: process.env.NODE_ENV !== 'production',
          },
        });
      });

      ST.update();
    };

    if (isStReady) {
      cb();
    }

    // ST.addEventListener('refreshInit', cb);

    return () => {
      // ST.removeEventListener('refreshInit', cb);
      ST.getById(StImagesId)?.kill();
    };
  }, [isStReady]);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Stack spacing={10} className={s.main}>
          {companiesData.map(({ img, title, text }, idx) => (
            <section
              key={title}
              className={clsx([s.section, `company-${idx + 1}`])}
            >
              <div className={s.left}>
                <div className={s.comp_img}>
                  <Image src={img} alt="companies logo" />
                </div>
              </div>
              <div className={clsx([s.right])}>
                <Stack className={s.comp_txt} spacing={2}>
                  <div>
                    <Typography variant="h6"> Znus </Typography>
                    <Typography variant="h3"> {title} </Typography>
                  </div>
                  <Typography> {text} </Typography>
                  <Button size="large" variant="outlined">
                    Learn More
                  </Button>
                </Stack>

                <div className={s.comp_address}>
                  <Typography variant="h5"> ADDRESS </Typography>
                  <Typography>++251911213001</Typography>
                  <Typography> Location of the office </Typography>
                  <Typography>Email@Company.com</Typography>
                </div>
              </div>
            </section>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Companies;
