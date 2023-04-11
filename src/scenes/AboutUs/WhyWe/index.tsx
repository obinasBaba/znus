import React from 'react';
import { Container, Typography } from '@mui/material';
import IconV from '@/public/assets/images/about/vission.svg';
import IconM from '@/public/assets/images/about/mission.svg';
import s from './whywe.module.scss';

const whyWe = [
  {
    title: 'Enhanced Market Knowledge',
    desc: `Our agents have advanced expertise within
    their specialized cities and neighborhoods in this real estate field.`,
    icon: IconV,
  },
  {
    title: 'Detailed Deal Structuring',
    desc: `Our knowledge and training focus on negotiating
    the best purchase price for our clients with in the normal range.`,
    icon: IconM,
  },
  {
    title: 'Post-Purchasing Assistance',
    desc: `Clients receive access to interior designers,
    handyman services, and advantageous pricing from preferred vendors.`,
    icon: IconM,
  },
];

const Intro = () => {
  return (
    <div className={s.container}>
      <Container maxWidth={'xxl' as any} className={s.wrapper}>

        <div>
          <Typography className={s.title_txt_sub} variant="body1">
            <span>{'//'}</span>
            Reasons
          </Typography>
          <Typography variant="h2" className={s.title}>
            Why Us?
          </Typography>
        </div>

        <div className={s.why_list}>
          {whyWe.map((item, idx) => (
            <div className={s.why_we_card} key={item.title}>
              <div>
                <Typography variant="h3">0{idx + 1}</Typography>
              </div>
              <Typography variant="h5" className={s.title}>
                {item.title}
              </Typography>
              <Typography variant="body1" className={s.desc}>
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>

      </Container>
    </div>
  );
};

export default Intro;
