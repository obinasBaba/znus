import React from 'react';
import s from './contactform.module.scss';
import { Button, Container, InputLabel, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';

const ContactForm = () => {
  return (
    <div className={s.container}>
      <Container maxWidth="xl" className={s.wrapper}>
        <form className={s.form}>
          <div className={s.field}>
            <InputLabel htmlFor="filled-hidden-label-normal">
              Full name
            </InputLabel>
            <TextField
              fullWidth
              hiddenLabel
              placeholder="Your Name"
              id="filled2d-hidden-label-normal"
              variant="filled"
            />
          </div>
          <div className={s.field}>
            <InputLabel htmlFor="filled-hidden-label-normal">
              Your Email
            </InputLabel>
            <TextField
              fullWidth
              hiddenLabel
              placeholder="example@youmail.com"
              id="filled2d-hidden-label-normal"
              variant="filled"
            />
          </div>

          <div className={s.field}>
            <InputLabel htmlFor="filled-hidden-label-normal">
              Subject
            </InputLabel>
            <TextField
              fullWidth
              hiddenLabel
              placeholder="How can we help"
              id="filled2d-hidden-label-normal"
              variant="filled"
            />
          </div>
          <div className={s.field}>
            <InputLabel htmlFor="filled-hidden-label-normal">
              Message
            </InputLabel>
            <TextField
              fullWidth
              hiddenLabel
              placeholder="hello there, I would like to tal about how to..."
              id="filled2d-hidden-label-normal"
              variant="filled"
              multiline
              rows={4}
            />
          </div>
          <Button startIcon={<Send />} variant="outlined">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ContactForm;
