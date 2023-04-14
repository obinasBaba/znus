import React, { useState } from 'react';
import s from './companiescards.module.scss';
import Img1 from './comp-1.png';
import Img2 from './comp-2.png';
import Img3 from './comp-3.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Stack, Typography } from '@mui/material';

const CompaniesCards = () => {
  const [isDefault, setIsDefault] = useState(true);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <div className={s.c_img}>
            <header>
              <Stack className={s.title_txt} spacing={2}>
                <div>
                  <Typography className={s.title_txt_sub} variant="body1">
                    <span>{'//'}</span>
                    02 . companies
                  </Typography>

                  <Typography variant="h3" gutterBottom>
                    Browse Our Growing
                    <br />
                    Companies
                  </Typography>
                </div>

                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias aliquam beatae cum distinctio, dolores dolorum eos
                  fugiat in nesciunt non placeat quae quibusdam reprehenderit?
                  Eius enim et hic maxime veritatis.
                </Typography>
              </Stack>
            </header>
          </div>
        </div>

        <div className={s.right}>

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
