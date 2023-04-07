import { Button, IconButton, Slide } from '@mui/material';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import s from './topappbar.module.scss';
import { useAppContext } from '@/context/app';
import { useRouter } from 'next/router';
import { useLocomotiveScroll } from '@/components/commons/layout/LocoMotive';
import { useAppInfo } from '@/context/MotionValuesContext';
import RouteChangeEvent from '@/util/helpers/RouteChangeEvent';
import debounce from 'lodash.debounce';
import { NotesTwoTone } from '@mui/icons-material';
import LogoSvg from '@/components/Logo';
import { motion } from 'framer-motion';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const { navBar } = useAppContext();
  const router = useRouter();

  const [trigger, setTrigger] = useState(true);

  const { scrollDirection, yProgress } = useLocomotiveScroll();
  const { appBarScrollState } = useAppInfo();

  useLayoutEffect(() => {
    const event = RouteChangeEvent.GetInstance();

    event.addListener('end', () => {
      setTrigger(true);
    });
  }, []);

  useEffect(() => {
    const debouncedResponse = debounce((dir) => {
      if (!dir) return;

      // if (0.05 > yProgress.get()) return setTrigger(true);

      if (dir === 'up') {
        setTrigger(true);
        appBarScrollState.set('up');
      } else if (dir === 'down') {
        setTrigger(false);
        appBarScrollState.set('down');
      }
    }, 400);

    // scrollDirection.onChange(debouncedResponse);
    scrollDirection.on('change', debouncedResponse);

    return () => {
      scrollDirection.clearListeners();
    };
  }, [scrollDirection]);

  useEffect(() => {
    setTrigger(true);
  }, [navBar, router]);

  return (
    <Slide appear={false} direction="down" in={trigger} timeout={500}>
      {children}
    </Slide>
  );
}

export function TopAppBar() {
  const { openNavMenu } = useAppContext();

  return (
    <HideOnScroll>
      <nav className={s.container}>
        <div className={s.wrapper}>
          <div className={s.logo}>
            <LogoSvg fill="#000" />
          </div>

          <IconButton onClick={() => openNavMenu()} color="inherit">
            <NotesTwoTone />
          </IconButton>
        </div>
      </nav>
    </HideOnScroll>
  );
}
