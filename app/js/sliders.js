import {Swiper, Navigation, Pagination, Parallax, Thumbs} from 'swiper/dist/js/swiper.esm.js'
import 'swiper/dist/css/swiper.min.css'
import {EffectFade} from "swiper/dist/js/swiper.esm";

Swiper.use([Navigation, Pagination, EffectFade, Parallax, Thumbs]);

export default class Sliders {
  constructor() {
    this.init();
  }

  init() {
    const sliderMainThumbs = new Swiper("#sliderMain .slider-main__thumbs .swiper-container", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      speed: 700,
      loop: true,
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      direction: 'vertical'
    });

    const sliderMain = new Swiper("#sliderMain .slider-main__top", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      parallax: true,
      pagination: {
        el: '#sliderMain .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '#sliderMain .swiper-button-next',
        prevEl: '#sliderMain .swiper-button-prev',
      },
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      preventInteractionOnTransition: true,
      thumbs: {
        swiper: sliderMainThumbs,
      }
    });

    sliderMain.on('slideChangeTransitionStart', function() {
      sliderMainThumbs.slideTo(sliderMain.activeIndex);
    });

    sliderMainThumbs.on('transitionStart', function(){
      sliderMain.slideTo(sliderMainThumbs.activeIndex);
    });
  }
}

export class Slider {
  constructor(selector, options) {
    new Swiper(selector, options);
  }
}
