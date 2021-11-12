 // import Swiper JS
import Swiper from 'swiper';

var swiper = new Swiper(".slider-card", {
    slidesPerView: 3,
    spaceBetween: 60,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".pagination__next",
      prevEl: ".pagination__prew",
    },
  });

