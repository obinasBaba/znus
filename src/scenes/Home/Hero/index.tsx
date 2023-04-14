import React, { useEffect, useState } from 'react';
import s from './hero.module.scss';

import HeroImg1 from '@/public/assets/images/hero/hero-image.png';
import HeroImg2 from '@/public/assets/images/hero/hero-image.png';
import HeroImg3 from '@/public/assets/images/hero/hero-image.png';
import { AnimatePresence, motion, useAnimate } from 'framer-motion';
import { wrap } from '@/util/helpers';
import { IconButton, Typography } from '@mui/material';
import { ChevronLeftSharp, ChevronRightSharp } from '@mui/icons-material';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import clsx from 'clsx';

const heroImages = [HeroImg1, HeroImg2, HeroImg3];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Hero = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [images, setImages] = useState(heroImages);
  const imageIndex = wrap(0, images.length, page);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    return;
    animate(
      '.swapping_text',
      { y: ['0%', '-33.333%', '-66.6666%', '0%'] },
      {
        duration: 7,
        ease: 'easeInOut',
        times: [0, 0.3, 0.6, 0, 0],
        repeat: Infinity,
        repeatDelay: 0,
      },
    );
  }, []);

  return (
    <div className={s.container} ref={scope}>
      <div className={s.wrapper}>
        <Typography variant="h2" className={s.text}>
          Let’s Collaborate and <br />
          <div className={s.swapping_txt_wrapper}>
            <Swiper
              loop
              direction="vertical"
              autoplay={{
                delay: 2000,
              }}
              speed={2400}
              slidesPerView={1}
              modules={[Autoplay]}
              className={clsx([s.text_swiper])}
            >
              <SwiperSlide>
                <i>Grow</i>
              </SwiperSlide>
              <SwiperSlide>
                <i>Build</i>
              </SwiperSlide>
              <SwiperSlide>
                <i>Work</i>
              </SwiperSlide>
            </Swiper>
          </div>
          {'  '} Your Business
        </Typography>

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className={s.content}
            key={page}
            custom={direction}
            variants={variants}
          >
            <Swiper
              loop
              autoplay={{
                delay: 6000,
              }}
              speed={1400}
              slidesPerView={1}
              modules={[Autoplay, Pagination, Navigation]}
              className={clsx([s.swiper, 'mySwiper'])}
              navigation={{
                enabled: true,
                nextEl: '.next-btn',
                prevEl: '.prev-btn',
              }}
            >
              {images.map((image) => (
                <SwiperSlide key={image.src}>
                  <div className={s.img}>
                    <Image src={images[imageIndex]} alt="hero image" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>
        <div className={s.btns}>
          <IconButton className={clsx([s.next, 'next-btn'])}>
            <ChevronLeftSharp fontSize="large" />
          </IconButton>

          <IconButton className={clsx([s.prev, 'prev-btn'])}>
            <ChevronRightSharp fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// companies
