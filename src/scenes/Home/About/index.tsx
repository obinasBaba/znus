import React from 'react';
import s from './about.module.scss';

import AboutImg from '@/public/assets/images/about-img.png';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.text}>
          <header>
            <Typography className={s.title_txt_sub} variant="body1">
              <span>{'//'}</span>
              Who are
            </Typography>
            <Typography variant="h1">Zuns Group</Typography>
          </header>

          <Typography className={s.desc}>
            When Zuns’s Founder and Chairman Zukuv Adbu established his
            investment company in 1991, he had a vision of being a “thorn in the
            side” of complacent company managers not delivering full value to
            shareholders.
            <br />
            <br />
            Zuns’s aims to take an active role in the companies we invest in,
            working together with boards and management to unlock value and
            improve shareholder returns. Zuns’s has always been prepared to
            agitate for change when warranted, this remains part of our DNA
            today. At Zuns’s, investing is never a static game. We work with an
            ethos that “the more we roll up our sleeves and get involved, the
            more we will ensure success”.
            <br />
            <br />
            While Zukuv Adbu prefers the term “constructivist” to “activist”
            when describing Zuns’s investment style, the Zuns’s name is a
            constant reminder that we will always strive to improve shareholder
            returns and fight against complacency wherever it is evident.
          </Typography>

          <Link href="/our-companies">
            <Button variant="outlined" size="large">
              Learn More
            </Button>
          </Link>
        </div>

        <div className={s.right}>
          <div className={s.about_img}>
            <Image src={AboutImg} alt="about image" />
          </div>
          <div className={s.ceo}>
            <Typography>
              “We are proud of Zuns’s reputation for due diligence,
              constructivist support and mentoring of small companies with the
              aim of increasing value for all shareholders.”
            </Typography>

            <Box sx={{ mt: '2rem' }}>
              <Typography>Zukuv Adbu</Typography>

              <Typography>Founder & CEO </Typography>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
