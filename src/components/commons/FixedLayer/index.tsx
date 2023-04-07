import React from 'react';
import s from './fixed.module.scss';
import { TopAppBar } from '@/components/commons/FixedLayer/TopAppBar';
import { AnimatePresence } from 'framer-motion';
import NavMenu from '@/components/commons/FixedLayer/NavMenu';
import { useAppContext } from '@/context/app';

const FixedLayer = () => {
  const { navMenu } = useAppContext();

  return (
    <div className={s.container}>
      <TopAppBar />

      <AnimatePresence mode="wait">{navMenu && <NavMenu />}</AnimatePresence>
    </div>
  );
};

export default FixedLayer;
