import React, { useState } from 'react';
import s from './companiescards.module.scss';

import CompImg from './comp-img.png';
import Img1 from './comp-1.png';
import Img2 from './comp-2.png';
import Img3 from './comp-3.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Typography } from '@mui/material';

const CompaniesCards = () => {
  const [isDefault, setIsDefault] = useState(true);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <div className={s.c_img}>
            <Image src={CompImg} alt="company img" />
          </div>
        </div>

        <div className={s.right}>
          <div className={s.text}>
            <Typography variant="h4">ZUNS GROUP COMPANIES</Typography>

            <Typography variant="body1">
              View our companies and business
            </Typography>
          </div>

          <motion.div
            className={clsx([s.card_wrapper, isDefault && s.default])}
            onHoverEnd={() => {
              setIsDefault(true);
            }}
            onHoverStart={() => {
              setIsDefault(false);
            }}
          >
            {[Img1, Img2, Img3].map((item, idx) => (
              <div className={s.img} key={idx}>
                <Image src={item} alt="image" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesCards;
