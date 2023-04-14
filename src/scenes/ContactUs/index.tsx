import React from 'react';
import s from './contactus.module.scss';
import { Container, Divider, Stack, Typography } from '@mui/material';
import {
  LocationOnTwoTone,
  Mail,
  MailTwoTone,
  Phone,
  PhoneTwoTone,
  Place,
} from '@mui/icons-material';
import ContactForm from '@/scenes/ContactUs/ContactForm';
import PageHeader from '@/components/PageHeader';

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

export const SectionTitle = ({ subtitle, title }: any) => {
  return (
    <header>
      <Typography className={s.title_txt_sub} variant="body1">
        <span>{'//'}</span>
        {subtitle}
      </Typography>
      <Typography variant="h1">{title}</Typography>
    </header>
  );
};

const ContactUs = () => {
  return (
    <div className={s.container}>
      <PageHeader title={'Contact Us'} subTitle={'Lets Talk'} />

      <Container maxWidth={'xl' as any} className={s.wrapper}>
        <Stack direction="row" gap="6rem" alignItems="center">
          <Stack flex="1" spacing={5}>
            <Stack spacing={2}>
              <header>
                <Typography className={s.title_txt_sub} variant="body1">
                  <span>{'//'}</span>
                  GET IN TOUCH
                </Typography>
                <Typography variant="h4">
                  Contact our support team to grow <br /> your business
                </Typography>
              </header>

              <Typography maxWidth="55ch">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
              </Typography>
            </Stack>

            <Divider />

            <Stack spacing={2}>
              <Typography variant="h5">Dubia</Typography>

              <Stack direction="row" gap="1rem" alignItems="center">
                <Place />
                <Typography> 14 Tottenham Road, Dubai, England</Typography>
              </Stack>

              <Stack direction="row" gap="1rem" alignItems="center">
                <Phone />
                <Typography>+1 212 425 8617</Typography>
              </Stack>

              <Stack direction="row" gap="1rem" alignItems="center">
                <Mail />
                <Typography>information@office.com</Typography>
              </Stack>
            </Stack>
          </Stack>

          <ContactForm />
        </Stack>
      </Container>
    </div>
  );
};

export default ContactUs;
