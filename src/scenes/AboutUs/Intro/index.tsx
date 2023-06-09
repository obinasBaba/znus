import React from 'react';
import s from '@/scenes/AboutUs/Intro/intro.module.scss';
import { Stack, Typography } from '@mui/material';
import IconV from '@/public/assets/images/about/vission.svg';
import IconM from '@/public/assets/images/about/mission.svg';
import Image from 'next/image';
import AboutImg from '@/public/assets/images/about/img.png';
import CircleImg from '@/public/assets/images/about/circle.png';

const our = [
  {
    title: 'Our Vission',
    desc: `As passionate entrepreneurs, but most importantly
    as family members and responsible citizens, we believe that
    the cornerstone of any business must rely on benefiting society.`,
    icon: IconV,
  },
  {
    title: 'Our Mission',
    desc: `Our Mission is to be the most effective real
     estate platform by offering a transparent model
      that allows homeowners to sell their house and stay in it as a renters`,
    icon: IconM,
  },
];

const Intro = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.bg} />

        <div className={s.about}>
          <div className={s.us_img}>
            <Image src={AboutImg} alt="about us" />
          </div>

          <div className={s.text}>
            <aside>
              <Typography className={s.title_txt_sub} variant="body1">
                <span>{'//'}</span>
                Who are
              </Typography>
              <Typography variant="h3" className={s.text_title}>
                Buying & Selling Property In <br />
                An Easy Way with Us
              </Typography>
              <Typography variant="body1" className={s.desc}>
                As passionate entrepreneurs, but most importantly as family
                members and responsible citizens, we believe that the
                cornerstone of any business must rely on benefiting society
                while offering a transparent solution.
              </Typography>
            </aside>

            <div className={s.our}>
              {our.map((item) => (
                <div className={s.our_item} key={item.title}>
                  <Stack direction="row" spacing={2} alignItems="self-start">
                    <Image src={item.icon} alt="our icon" />

                    <div>
                      <Typography className={s.our_title} variant="h4">
                        {item.title}
                      </Typography>
                      <Typography variant="body1" className={s.our_desc}>
                        {item.desc}
                      </Typography>
                    </div>
                  </Stack>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={s.services}>
        <aside>
          <Typography variant="h3" className={s.text_title} gutterBottom>
            We Provide High Quality Services
          </Typography>
          <Typography variant="body1" className={s.desc}>
            Lorem ipsum dolor sit amet consectetur. Urna tortor mauris sodales
            cras id lectus felis ut orci. Diam nec facilisis bibendum amet
            ornare adipiscing vestibulum donec faucibus. Tincidunt tortor felis
            risus donec gravida. <br /> <br /> Tor tor sollicitudin rhoncus
            molestie bibendum arcu non. Felis auctor lobortis mattis urna in
            risus sed. Amet turpis elementum ut dolor. Cras elementum vestibulum
            et massa in pharetra aliquet sit. Nam purus ac sagittis ultricies
            gravida elit in est. Et netus suspendisse urna cursus elementum.
          </Typography>
        </aside>

        <div className={s.circle_img}>
          <Image src={CircleImg} alt="circle service image" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
