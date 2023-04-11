import React from 'react';
import s from './contactus.module.scss';
import Header from '@/scenes/ContactUs/Header';
import { Button, Container, Divider, Stack, Typography } from '@mui/material';
import {
  LocationOnTwoTone,
  MailTwoTone,
  PhoneTwoTone,
} from '@mui/icons-material';
import ContactForm from '@/scenes/ContactUs/ContactForm';

const socials = [
  {
    name: 'Email',
    Icon: MailTwoTone,
    content: 'marketing@promote.com',
    btnTxt: 'Contact',
  },
  {
    name: 'Phone',
    Icon: PhoneTwoTone,
    content: '+1 123 45874',
    btnTxt: 'Call',
  },
  {
    name: 'Location',
    Icon: LocationOnTwoTone,
    content: '10  Sun House, Dubia, UK',
    btnTxt: 'Office',
  },
];

const ContactUs = () => {
  return (
    <div className={s.container}>
      <Header />

      <Container maxWidth={'xl' as any} className={s.wrapper}>
        <Stack spacing={1} sx={{ margin: '0 auto' }}>
          <Typography variant="h2">Socials</Typography>

          <div className={s.social_cards}>
            {socials.map((social) => (
              <div className={s.card_wrapper} key={social.name}>
                <div className={s.card}>
                  <Button variant="contained" size="large">
                    {social.btnTxt}
                  </Button>
                  <Divider />
                  <Stack direction="row">
                    <social.Icon />
                    <Stack direction="column">
                      <Typography variant="h5">{social.name}</Typography>
                      <Typography variant="body1" className={s.social_desc}>
                        {social.content}
                      </Typography>
                    </Stack>
                  </Stack>
                </div>
              </div>
            ))}
          </div>
        </Stack>
      </Container>

      <ContactForm />
    </div>
  );
};

export default ContactUs;
