import React, { useState } from 'react';
import s from './hero.module.scss';

import HeroImg1 from '@/public/assets/images/hero/hero-image.png';
import HeroImg2 from '@/public/assets/images/hero/hero-image.png';
import HeroImg3 from '@/public/assets/images/hero/hero-image.png';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from '@/util/helpers';
import { IconButton, Typography } from '@mui/material';
import { ChevronLeftSharp, ChevronRightSharp } from '@mui/icons-material';
import Image from 'next/image';

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

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Typography variant="h2" className={s.text}>
          Let’s Collaborate and <br /> <i>Grow</i> Your Business
        </Typography>

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className={s.content}
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <Image src={images[imageIndex]} alt="hero image" />
          </motion.div>
        </AnimatePresence>
        <div className={s.btns}>
          <IconButton className={s.next} onClick={() => paginate(1)}>
            <ChevronLeftSharp fontSize="large" />
          </IconButton>

          <IconButton className={s.prev} onClick={() => paginate(-1)}>
            <ChevronRightSharp fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// companies
