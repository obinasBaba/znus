import React from 'react';
import s from './footer.module.scss';
import { Button, Divider, IconButton, Typography } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import Link from 'next/link';

const socials = [LinkedIn, Facebook, Instagram, Twitter];

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.top}>
          <Typography variant="h2">
            Have an idea? <br />
            Let&apos;s Build and <br />
            Scale it!
          </Typography>

          <Button variant="outlined" size="large">
            Start With Us
          </Button>
        </div>

        <Divider className={s.divider} />

        <div className={s.middle}>
          <div className={s.pages}>
            {[
              'home',
              'companies',
              'FAQ',
              'Terms & Conditions',
              'Privacy Policy',
              'Contact Us',
            ].map((link, idx) => (
              <Typography key={idx} className={s.link}>
                {link}
              </Typography>
            ))}
          </div>

          <div className={s.contact}>
            <div className={s.contact_item}>
              <Typography> Let&apos;s Talk! </Typography>
              <Typography color="gray" variant="caption">
                hello@example.com
              </Typography>
            </div>
            <div className={s.social}>
              {socials.map((Social, idx) => (
                <IconButton key={idx}>
                  <Social />
                </IconButton>
              ))}
            </div>
          </div>

          <div className={s.address}>
            <Typography variant="body1">Znuns group</Typography>
            <Typography variant="body1">Vukasoviceva 1,</Typography>
            <Typography variant="body1">10000 zafgre,</Typography>
            <Typography variant="body1">dubia</Typography>

            <Typography variant="body1">+971-02990-02010</Typography>
          </div>
        </div>

        <Divider className={s.divider} />

        <div className={s.bottom}>
          <Typography color="gray">
            <Link href="/">Privacy Policy</Link> |{' '}
            <Link href="/">Terms & Conditions</Link>
          </Typography>

          <Typography color="gray">© 2021 Znuns Group</Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
