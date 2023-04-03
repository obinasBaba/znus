import React from 'react';
import s from './layout.module.scss';
import FixedLayer from '@/components/commons/FixedLayer';
import { motion } from 'framer-motion';
import Footer from '@/components/commons/Footer';

interface Props {
  children: React.ReactNode;
  pageProps: Record<string, any>;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <FixedLayer />

      <motion.div className={s.root}>
        <main>{children}</main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Layout;
