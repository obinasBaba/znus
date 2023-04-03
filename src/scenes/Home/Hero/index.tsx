import React from 'react';
import s from './hero.module.scss';
import { IconButton, Stack, SvgIcon, Typography } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import DonationCard from '@/components/DonationCard';

const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Stack className={s.text} spacing={4}>
          <Stack spacing={2}>
            <Typography variant="h2">
              Families in need <br />
              And Suffering
            </Typography>

            <Typography variant="body1" maxWidth="45ch">
              Families struggle to survive in Ethiopia without enough food,
              water, and shelter. Support us in providing assistance and
              emergency help to families in need.
            </Typography>

            <Typography variant="body1" maxWidth="35ch" fontSize="1.67rem">
              Make a one-time or monthly donation to receive this blessing as a
              member
            </Typography>
          </Stack>

          <Stack direction="row">
            <IconButton>
              <SvgIcon fontSize="large">
                <Instagram />
              </SvgIcon>
            </IconButton>
            <IconButton>
              <SvgIcon fontSize="large">
                <LinkedIn />
              </SvgIcon>
            </IconButton>
            <IconButton>
              <SvgIcon fontSize="large">
                <Facebook />
              </SvgIcon>
            </IconButton>
            <IconButton>
              <SvgIcon fontSize="large">
                <Twitter />
              </SvgIcon>
            </IconButton>
          </Stack>
        </Stack>

        <div className={s.form}>
          <DonationCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
