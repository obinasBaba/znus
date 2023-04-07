import { Variants } from 'framer-motion';
import { basicVariants } from '@/components/MotionItems';

export const transition = {
  duration: 1.2,
  ease: [0.165, 0.84, 0.44, 1],
};
export const blurBgVariants = {
  ...basicVariants,
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, 0, 0.9],
    },
  },
  transition: {
    duration: 1,
    ease: [0.165, 0.84, 0.44, 1],
  },
};
export const menuVariants = {
  initial: {
    x: '100%',
  },
  animate: {
    x: 0,
  },
  exit: {
    x: '100%',
  },

  transition: {
    duration: 1,
    ease: [0.6, 0.01, 0, 0.9],
  },
};
export const linkContainerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      when: 'beforeChildren',
    },
  },
};
export const linkItemVariant: any = {
  initial: {
    opacity: 0,
    x: '80%',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: {
        delay: 0.2,
        duration: 1.4,
        ease: [0.6, 0.01, 0, 0.9],
      },
      default: {
        duration: 1.2,
        ease: [0.165, 0.84, 0.44, 1],
      },
    },
  },
  exit: {
    opacity: 0,
    x: '20%',
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0, 0.9],
    },
  },
  transition: {
    duration: 1.2,
    ease: [0.165, 0.84, 0.44, 1],
  },
};
export const footerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};
export const footerItemVariant: any = {
  initial: {
    y: '130%',
  },
  animate: {
    y: 0,
  },
  exit: {
    opacity: 0,
  },

  transition: {
    duration: 1.2,
    ease: [0.165, 0.84, 0.44, 1],
  },
};
export const grapeVariants = {
  initial: {
    opacity: 0.5,
    y: '-20%',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      ...transition,
    },
  },

  exit: {
    opacity: 0,
  },

  transition: {
    ...transition,
  },
};
export const houseVariants = {
  initial: {
    opacity: 0.4,
    y: '60%',
    x: '-50%',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      ...transition,
    },
  },

  exit: {
    opacity: 0,
  },

  transition: {
    ...transition,
  },
};
