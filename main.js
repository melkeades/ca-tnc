import './style.styl'
import { addSplideClasses, connectSplideArrows, dev, sel } from './utils'
// import Splide from '@splidejs/splide'
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
// console.log('Hello world!f')

function headerSlider() {
  const slider = document.querySelector('#property-marquee')
  const sliderParent = slider?.parentElement
  const leftArrow = sliderParent?.querySelectorAll('.splide__prev')
  const rightArrow = sliderParent?.querySelectorAll('.splide__next')
  console.log('sliderParent', sliderParent, leftArrow, rightArrow)
  if (!slider) return
  slider.classList.add('splide')
  const splide = new Splide(slider, {
    type: 'loop',
    pagination: false,
    arrows: false,
    perPage: 1,
    autoWidth: true,
  }).mount({ AutoScroll })
  leftArrow.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      splide.go('>')
    })
  })
  rightArrow?.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      splide.go('<')
    })
  })
}
// headerSlider()

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
  // successSlider()
}
