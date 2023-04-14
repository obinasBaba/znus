import React from 'react';
import s from './header.module.scss';

import PathBottom from '@/public/assets/images/header/path-bottom.png';
import PathTop from '@/public/assets/images/header/path-top.png';
import Image from 'next/image';
import { Container, Typography } from '@mui/material';
import clsx from 'clsx';

type PropsType = {
  title: string;
  subTitle: string;
};
const Header = (props: PropsType) => {
  return (
    <div className={s.container} data-scroll={true}>
      <div
        className={clsx([s.path_bottom])}
        data-scroll={true}
        data-scroll-speed={-1}
      >
        <Image src={PathBottom} alt="page header image" />
      </div>

      <div className={s.path_top} data-scroll={true} data-scroll-delay={3}>
        <Image src={PathTop} alt="page header image" />
      </div>

      <Container maxWidth={'xxl' as any} className={s.wrapper}>
        <div className={s.text}>
          <Typography variant="h2">{props.title}</Typography>

          <Typography variant="h5">{props.subTitle}</Typography>
        </div>
      </Container>
    </div>
  );
};

export default Header;
