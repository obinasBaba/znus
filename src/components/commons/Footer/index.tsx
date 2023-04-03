import React from 'react';
import s from './footer.module.scss';
import {
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.top}>
          <div>
            <div className={s.email_sub}>
              <Typography variant="h5">Subscribe to our newsletter</Typography>
              <Typography variant="body2" color="gray">
                Be the first to know about our the newest stars and best deals
                on Divo.
              </Typography>

              <TextField
                className={s.email_field}
                name="username"
                label="Email"
                placeholder="coming-soon"
                type="email"
                variant="outlined"
                fullWidth
                required
                disabled
                // value={formik.values.username}
                // onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div className={s.pages}>
              {[
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
          </div>

          <div className={s.top_right}>
            <Typography gutterBottom>
              Ready to become a talent on Divo?
            </Typography>
            <Button size="large" variant="outlined">
              Enroll as a talent
            </Button>
          </div>
        </div>

        <Divider className={s.divider} />

        <div className={s.bottom}>
          <div className={s.address}>
            <div className={s.us}>
              <Typography variant="h5">Divo</Typography>
            </div>

            <Typography variant="body2" color="gray">
              copyright &copy;
              {new Date().getFullYear()} Divo
            </Typography>
          </div>

          <div className={s.social}></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
