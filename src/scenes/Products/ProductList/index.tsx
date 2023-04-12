import React, { useEffect, useRef } from 'react';
import s from './productlist.module.scss';
import { Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import gsap from 'gsap';
import ST from 'gsap/dist/ScrollTrigger';
import P1 from '@/public/assets/images/products/p1.png';
import P2 from '@/public/assets/images/products/p2.png';
import P3 from '@/public/assets/images/products/p3.png';
import P4 from '@/public/assets/images/products/p4.png';
import P5 from '@/public/assets/images/products/p5.png';
import P6 from '@/public/assets/images/products/p6.png';
import P7 from '@/public/assets/images/products/p7.png';
import P8 from '@/public/assets/images/products/p8.png';
import clsx from 'clsx';
import { useLocomotiveScroll } from '@/components/commons/layout/LocoMotive';

const products = [P1, P2, P3, P4, P5, P6, P7, P8];

const StId = 'product-list-st';

const ProductList = () => {
  const render = useRef(0);
  const { isStReady } = useLocomotiveScroll();
  // const isStReady = false;

  useEffect(() => {
    const pContainer: HTMLElement = document.querySelector('.p_list') as any;
    const text: HTMLElement | null = document.querySelector(
      '.p-list-container .text',
    );

    const cb = () => {
      console.log('creating pin run --------');

      ST.killAll();
      gsap.to(text, {
        scrollTrigger: {
          id: StId,
          trigger: text,
          pin: true, // scrub: true,
          pinSpacing: false,
          scroller: '[data-scroll-container]',
          start: () => 'top 25%',
          end: () => pContainer?.offsetHeight,

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
    <div className={clsx([s.container, 'p-list-container'])}>
      <Container maxWidth={'xxl' as any} className={s.wrapper}>
        <aside className={clsx([s.aside, 'text'])}>
          <Typography className={s.title_txt_sub} variant="body1">
            <span>{'//'}</span>
            Who are
          </Typography>
          <Typography variant="h2">Our Products</Typography>
          <Typography variant="body1" className={s.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
            dolorem eveniet modi, necessitatibus pariatur rem vel velit!
            Aliquam, suscipit unde voluptas.
          </Typography>
          <Button size="large" variant="outlined">
            Contact Us
          </Button>
        </aside>

        <div className={clsx([s.p_list, 'p_list'])}>
          {products.map((product) => (
            <div className={s.product} key={product.src}>
              <Image src={product} alt="product" />
              <div className={s.p_text}>
                <Typography variant="h4">Product Name</Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
