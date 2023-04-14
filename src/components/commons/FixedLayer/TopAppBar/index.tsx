import { IconButton, Slide, Stack, Typography } from '@mui/material';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import s from './topappbar.module.scss';
import { useAppContext } from '@/context/app';
import { useRouter } from 'next/router';
import { useLocomotiveScroll } from '@/components/commons/layout/LocoMotive';
import { useAppInfo } from '@/context/MotionValuesContext';
import debounce from 'lodash.debounce';
import { NotesTwoTone } from '@mui/icons-material';
import LogoSvg from '@/components/Logo';
import Link from 'next/link';

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
    const showNavBar = () => {
      setTrigger(true);
    };
    router.events.on('routeChangeComplete', showNavBar);

    return () => {
      router.events.off('routeChangeComplete', showNavBar);
    };
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
    }, 50);

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
  const [scrolled, setScrolled] = useState(false);
  const { y } = useLocomotiveScroll();

  useEffect(() => {
    const debouncedResponse = debounce((yAmount) => {
      if (yAmount > 400) {
        setScrolled(true);
      } else setScrolled(false);
    }, 50);

    y.on('change', debouncedResponse);

    return () => y.clearListeners();
  });

  return (
    <HideOnScroll>
      <nav className={s.container}>
        <div className={s.wrapper}>
          <div className={s.logo}>
            <Link href="/">
              <LogoSvg fill={scrolled ? '#000' : 'white'} />
            </Link>
          </div>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            onClick={() => openNavMenu()}
            sx={{
              border: `thin solid ${scrolled ? '#000' : 'white'}`,
              padding: '.22rem .5rem .22rem .8rem',
              cursor: 'pointer',
              color: scrolled ? '#000' : 'white',
              transition: 'all ease 400ms',
            }}
          >
            <Typography>MENU</Typography>
            <IconButton color="inherit">
              <NotesTwoTone />
            </IconButton>
          </Stack>
        </div>
      </nav>
    </HideOnScroll>
  );
}
