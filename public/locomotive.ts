import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  el: document.querySelector('[data-scroll-container]')!,
  smooth: true,
});

console.log('locomotive.ts', scroll);
