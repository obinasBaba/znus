import React, { useCallback, useRef } from 'react';
import s from './layout.module.scss';
import FixedLayer from '@/components/commons/FixedLayer';
import Footer from '@/components/commons/Footer';
import { useRouter } from 'next/router';
import { LocomotiveScrollProvider } from '@/components/commons/layout/LocoMotive';
import LocomotiveScroll from 'locomotive-scroll';
import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  pageProps: Record<string, any>;
}

const Layout: React.FC<Props> = ({ children }) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { asPath, pathname } = useRouter();

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        getDirection: true,
        getSpeed: true /*smoothMobile: {
          breakpoint: 0,
          smooth: true,
          getDirection: true,
        },*/ /*tablet: {
          breakpoint: 0,
          smooth: true,
          getDirection: true,
        },*/,
      }}
      containerRef={container} // height change detection
      watch={[]}
      onLocationChange={useCallback((scroll: LocomotiveScroll) => null, [])}
      location={asPath}
    >
      <FixedLayer />
      <div className={s.root} ref={container} data-scroll-container={true}>
        <main className={clsx([s.main])} id="main-container">
          <div className="content_wrapper">
            <div className="main_content_wrapper">{children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Layout;
