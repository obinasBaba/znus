import React, {
  createContext,
  DependencyList,
  MutableRefObject,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LocomotiveScrollOptions, Scroll } from 'locomotive-scroll';
import useResizeObserver from 'use-resize-observer';
import { useDebounce } from 'use-debounce';
import {
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import MouseFollower from 'mouse-follower';
import gsap from 'gsap';
import RouteChangeEvent from '@/util/helpers/RouteChangeEvent';
// import ScrollTrigger from 'gsap/ScrollTrigger';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export interface LocomotiveScrollContextValue {
  scroll: Scroll | null;
  isReady: boolean;
  scale: MotionValue<number>;
  scrollDirection: MotionValue<string>;
  yProgress: MotionValue<number>;
  y: MotionValue<number>;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  cursor: React.MutableRefObject<MouseFollower | undefined>;
}

const LocomotiveScrollContext = createContext<LocomotiveScrollContextValue>({
  scroll: null,
  isReady: false,
  scale: new MotionValue<number>(),
} as any);

export interface LocomotiveScrollProviderProps {
  options: LocomotiveScrollOptions;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  watch: DependencyList | undefined;
  onUpdate?: (scroll: Scroll) => void;
  location?: string;
  onLocationChange?: (scroll: Scroll) => void;
}

MouseFollower.registerGSAP(gsap);

export function LocomotiveScrollProvider({
  children,
  options,
  containerRef,
  watch,
  onUpdate,
  location,
  onLocationChange,
}: WithChildren<LocomotiveScrollProviderProps>) {
  const { height: containerHeight } = useResizeObserver<HTMLDivElement>({
    ref: containerRef,
  });
  const [isReady, setIsReady] = useState(false);
  const LocomotiveScrollRef = useRef<Scroll | null>(null);
  const [height] = useDebounce(containerHeight, 100);
  const cursor = useRef<MouseFollower>();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const yLimit = useMotionValue(0);
  const xLimit = useMotionValue(0);
  const scrollDirection = useMotionValue('');

  const yProgress = useTransform(y, [0, yLimit.get()], [0, 1], {
    clamp: false,
  });

  const ySmooth = useSpring(y, { damping: 50, stiffness: 400 });
  const velocity = useVelocity(ySmooth);

  const scale = useTransform(velocity, [-3000, 0, 3000], [1.01, 1, 1.01], {
    clamp: true,
  });

  useLayoutEffect(() => {
    const event = RouteChangeEvent.GetInstance();

    event.addListener('end', () => {
      cursor.current?.removeText();
      cursor.current?.removeState('-opaque');
      cursor.current?.removeState('-pointer');
    });
  }, []);

  useLayoutEffect(() => {
    if (LocomotiveScrollRef.current?.el) {
      // console.log('IT IS NOT NULL', LocomotiveScrollRef.current.name);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('locomotive-scroll').then((LocomotiveScroll) => {
      const dataScrollContainer = document.querySelector(
        '[data-scroll-container]',
      );

      if (LocomotiveScrollRef.current?.el) {
        //  console.log('IT IS NOT NULL', LocomotiveScrollRef.current.name);
        return;
      }

      // cursor.current = new MouseFollower();
      LocomotiveScrollRef.current = new LocomotiveScroll.default({
        el: dataScrollContainer ?? undefined,
        ...options,
      });

      setIsReady(true);

      // console.log('locomotive starting here -----', LocomotiveScrollRef.current.name);
    });

    return () => {
      LocomotiveScrollRef.current?.destroy();
      // console.log('locomotive DYING here -----', LocomotiveScrollRef.current?.name);
      LocomotiveScrollRef.current = null;

      setIsReady(false);
    };
  }, []);

  // configure scroll trigger
  useLayoutEffect(() => {
    if (!LocomotiveScrollRef.current) {
      return;
    }

    const dataScrollContainer = document.querySelector(
      '[data-scroll-container]',
    );

    /* ScrollTrigger.scrollerProxy(dataScrollContainer, {
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },

      // pinType: "transform",
      scrollTop(value) {
        if (!LocomotiveScrollRef.current) return;

        const top = arguments.length
          ? LocomotiveScrollRef.current.scrollTo(value as number, {})
          : LocomotiveScrollRef.current.scroll.instance.scroll.y;
        // console.log("scrollTop", top, value);

        return top;
      }, // fixedMarkers: true
    });*/

    const lsUpdate = () => {
      if (LocomotiveScrollRef.current) {
        LocomotiveScrollRef.current.update();
      }
    };

    lsUpdate();
    window.addEventListener('resize', lsUpdate);
    /* ScrollTrigger.addEventListener('refresh', lsUpdate);
     ScrollTrigger.refresh();
     ScrollTrigger.update();*/
  }, [isReady]);

  useEffect(() => {
    if (!LocomotiveScrollRef.current) {
      return;
    }

    LocomotiveScrollRef?.current?.update();
    yLimit.set(LocomotiveScrollRef.current?.scroll?.instance.limit.y);
    xLimit.set(LocomotiveScrollRef.current?.scroll?.instance.limit.x);

    if (onUpdate) {
      onUpdate(LocomotiveScrollRef.current);
    }
  }, [watch, height]);

  useEffect(() => {
    if (LocomotiveScrollRef.current === null || !location) {
      return;
    }

    // console.log('location change ---- -- - - - -');

    LocomotiveScrollRef.current.update();
    // cursor.current?.removeText();
    // cursor.current?.removeState('opaque');

    if (onLocationChange) {
      onLocationChange(LocomotiveScrollRef.current);
    }
  }, [location, onLocationChange]);

  useEffect(() => {
    if (isReady && LocomotiveScrollRef.current) {
      LocomotiveScrollRef.current.on('scroll', (arg: any) => {
        // console.log('scrolled: ', arg);
        x.set(arg?.delta?.x || arg.scroll.x);
        y.set(arg?.delta?.y || arg.scroll.y);
        scrollDirection.set(arg.direction);
      });
    }
  }, [isReady]);

  return (
    <LocomotiveScrollContext.Provider
      value={{
        cursor,
        scroll: LocomotiveScrollRef.current,
        isReady,
        scale,
        scrollDirection,
        yProgress,
        y,
        containerRef,
      }}
    >
      {children}
    </LocomotiveScrollContext.Provider>
  );
}

LocomotiveScrollContext.displayName = 'LocomotiveScrollContext';
LocomotiveScrollProvider.displayName = 'LocomotiveScrollProvider';

export function useLocomotiveScroll(): LocomotiveScrollContextValue {
  const context = useContext(LocomotiveScrollContext);

  useEffect(() => {
    if (!context.scroll) {
      console.warn(
        'react-locomotive-scroll: the context is missing. You may be using the hook without registering LocomotiveScrollProvider, or you may be using the hook in a component which is not wrapped by LocomotiveScrollProvider.',
      );
    }
  }, [context.scroll]);

  return context;
}

useLocomotiveScroll.displayName = 'useLocomotiveScroll';
