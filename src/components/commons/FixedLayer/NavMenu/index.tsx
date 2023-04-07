import React from 'react';
import s from './navmenu.module.scss';
import { motion } from 'framer-motion';
import { useUI } from '@/context/ui/context';
import { MotionChild, MotionParent } from '@/components/MotionItems';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { useLocomotiveScroll } from '@/components/commons/layout/LocoMotive';
import { CloseButton } from '@/components/commons/FixedLayer/NavMenu/Components/CloseButton';
import { useAppContext } from '@/context/app';
import { Typography } from '@mui/material';
import {
  blurBgVariants,
  linkContainerVariants,
  linkItemVariant,
  menuVariants,
  transition,
} from '@/components/commons/FixedLayer/NavMenu/variants';
import MenuImg1 from '@/public/assets/images/menu/menu-img-1.png';
import MenuImg2 from '@/public/assets/images/menu/menu-img-2.png';
import MenuImg3 from '@/public/assets/images/menu/menu-img-3.png';
import Image from 'next/image';

const links = [
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/' },
  {
    name: 'Our Companies',
    link: '/',
  },
  { name: 'Our Products', link: '/' },
  { name: 'Contact Us', link: '/' },
];

const menuImgs = [
  {
    img: MenuImg1,
    link: '/',
    text: 'lorem5',
  },
  {
    img: MenuImg2,
    link: '/',
    text: 'lorem5',
  },
  {
    img: MenuImg3,
    link: '/',
    text: 'lorem5',
  },
];

const NavMenu = () => {
  const { openModal } = useUI();
  const { closeNavMenu } = useAppContext();

  const router = useRouter();
  const { scroll } = useLocomotiveScroll();

  const onClick = (text: string) => {
    switch (text) {
      case 'Blogs': {
        closeNavMenu();

        setTimeout(() => {
          scroll?.scrollTo('#blogs', {
            duration: 1.3,
            easing: [0.6, 0.01, 0, 0.9],
          });
        }, 600);
        return;
      }
      case 'Login': {
        closeNavMenu();
        setTimeout(() => {
          openModal();
        }, 500);
        return;
      }
      default:
        return closeNavMenu();
    }
  };

  return (
    <MotionParent className={s.container} variants={{}}>
      <MotionChild
        className="blur_bg"
        onClick={() => closeNavMenu()}
        variants={blurBgVariants}
        transition={blurBgVariants.transition}
      />

      <MotionChild
        className="menu_wrapper"
        variants={menuVariants}
        transition={menuVariants.transition}
      >
        <CloseButton onClick={() => closeNavMenu()} />

        <motion.div className={s.image_list} variants={linkContainerVariants}>
          {menuImgs.map(({ img, link, text }, idx) => (
            <motion.div
              className={s.img_item}
              key={img.src}
              variants={linkItemVariant}
              transition={transition}
              onClick={() => setTimeout(() => closeNavMenu(), 400)}
            >
              <Link href={link}>
                <div className={s.img}>
                  <Image src={img} alt="menu image" />
                </div>
                <div className={s.img_text} data-cursor="-opaque">
                  <Typography variant="h4">{text}</Typography>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={s.link_list} variants={linkContainerVariants}>
          {links.map(({ name, link }, idx) => (
            <motion.div
              className={s.item}
              key={name}
              variants={linkItemVariant}
              transition={transition}
              onClick={() => setTimeout(() => closeNavMenu(), 400)}
            >
              <Link href={link}>
                <p className="no">(0{idx + 1})</p>
                <div className={s.link_name} data-cursor="-opaque">
                  <Typography variant="h4">{name}</Typography>
                  <Typography variant="h4">{name}</Typography>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </MotionChild>
    </MotionParent>
  );
};

export default NavMenu;
