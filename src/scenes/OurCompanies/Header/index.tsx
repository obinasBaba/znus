import React from 'react';
import s from './header.module.scss';

import HeadImg from '@/public/assets/images/Header.png';
import Image from 'next/image';
import { Container, Typography } from '@mui/material';

const Header = () => {
  return (
    <div className={s.container}>
      <Image src={HeadImg} alt="page header image" />
      <Container maxWidth={'xxl' as any} className={s.wrapper}>
        <div className={s.text}>
          <Typography variant="h2">Zuns Investment Group</Typography>

          <Typography variant="h5">Our Products</Typography>
        </div>
      </Container>
    </div>
  );
};

export default Header;
