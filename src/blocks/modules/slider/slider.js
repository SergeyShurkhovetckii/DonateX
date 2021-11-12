 // import Swiper JS
import Swiper from 'swiper';

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 60,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: ".pagination__next",
      prevEl: ".pagination__prew",
    },
  });

