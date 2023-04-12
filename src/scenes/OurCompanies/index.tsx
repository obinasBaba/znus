import React, { useEffect, useRef } from 'react';
import s from './ourcompanies.module.scss';
import Header from '@/scenes/OurCompanies/Header';
import clsx from 'clsx';
import { Button, Container, Stack, Typography } from '@mui/material';

import Comp1 from '@/public/assets/images/companies/comp-1.png';
import Comp2 from '@/public/assets/images/companies/comp-2.png';
import Comp3 from '@/public/assets/images/companies/comp-3.png';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useLocomotiveScroll } from '@/components/commons/layout/LocoMotive';
import ST from 'gsap/dist/ScrollTrigger';

const companies = [
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              aperiam dolorem eveniet modi, necessitatibus pariatur rem vel
              velit! Aliquam, suscipit unde voluptas.`,
    img: Comp1,
    path: '/our-companies',
  },
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              aperiam dolorem eveniet modi, necessitatibus pariatur rem vel
              velit! Aliquam, suscipit unde voluptas.`,
    img: Comp2,
    path: '/our-companies',
  },
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              aperiam dolorem eveniet modi, necessitatibus pariatur rem vel
              velit! Aliquam, suscipit unde voluptas.`,
    img: Comp3,
    path: '/our-companies',
  },
];

const StId = 'company-list-st';

const OurCompanies = () => {
  const render = useRef(0);
  const { isStReady } = useLocomotiveScroll();

  useEffect(() => {
    const cContainer: HTMLElement = document.querySelector('.c_list') as any;
    const sticky: HTMLElement | null = document.querySelector(
      '.c-list-container .sticky',
    );

    const cb = () => {
      console.log('creating pin run --------');

      ST.killAll();
      gsap.to(sticky, {
        scrollTrigger: {
          id: StId,
          trigger: sticky,
          pin: true, // scrub: true,
          pinSpacing: false,
          scroller: '[data-scroll-container]',
          start: () => 'top 25%',
          end: () => cContainer?.offsetHeight,

          markers: process.env.NODE_ENV !== 'production',
        },
      });

      ST.update();
    };

    if (isStReady) {
      cb();
    }

    console.log(
      `useEffect run  ${++render.current}`,
      ' isStReady: ',
      isStReady,
      'st instances: ',
      ST.getAll().forEach((st) => console.log(st)),
    );

    // ST.addEventListener('refreshInit', cb);

    return () => {
      // ST.removeEventListener('refreshInit', cb);
      ST.getById(StId)?.kill();
      console.log('cleaning ST', ST.getAll());
    };
  }, [isStReady]);

  return (
    <div className={clsx([s.container, 'c-list-container'])}>
      <Header />

      <Container maxWidth={'xxl' as any} className={s.wrapper}>
        <div className={s.content}>
          <aside className={clsx([s.aside, 'sticky'])}>
            <div className={s.text}>
              <Typography className={s.title_txt_sub} variant="body1">
                <span>{'//'}</span>
                Companies
              </Typography>
              <Typography variant="h2">Our Companies</Typography>
              <Typography variant="body1" className={s.desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                aperiam dolorem eveniet modi, necessitatibus pariatur rem vel
                velit! Aliquam, suscipit unde voluptas.
              </Typography>

              <Stack width="100%">
                <Button size="large" variant="outlined">
                  Contact Us
                </Button>
                <Button size="large" variant="outlined">
                  Contact Us
                </Button>
                <Button size="large" variant="outlined">
                  Contact Us
                </Button>
              </Stack>
            </div>

            <Typography variant="h5" className={s.section_no}>
              <b>01</b>
              <i>/03</i>
            </Typography>
          </aside>

          <div className={clsx([s.c_list, 'c_list'])}>
            {companies.map((company) => (
              <div className={s.company} key={company.img.src}>
                <div className={s.c_img}>
                  <Image src={company.img} alt="company image" />
                </div>
                <Typography className={s.c_text}>{company.text}</Typography>
                <Link href={company.path}>
                  <Button variant="outlined" size="large">
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurCompanies;
