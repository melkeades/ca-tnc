import './style.styl'
import { addSplideClasses, connectSplideArrows, dev, sel } from './utils'
// console.log('Hello world!f')

function successSlider() {
  console.log('successSlider')

  const testimonials$ = sel('.story__slider')
  if (!testimonials$) return
  addSplideClasses(testimonials$)

  const slider = new Splide(testimonials$, {
    arrows: false,
    pagination: false,
    // type: 'fade',
    gap: '4rem',
    //   perPage: 1,
    type: 'loop',
    speed: 2000,
    fixedWidth: '82%',

    // interval: 1000,

    autoplay: dev ? false : true,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    dragMinThreshold: {
      mouse: 50,
      touch: 50,
    },
    breakpoints: {
      991: {
        fixedWidth: '100%',
        perPage: 1,
      },
      768: {
        speed: 1000,
        // easing: 'ease-out',
      },
    },
    // drag: false,
  }).mount()
  connectSplideArrows(slider, '.pfh__tools--wrapper.is--success', '.button.is--nav')
}
successSlider()
