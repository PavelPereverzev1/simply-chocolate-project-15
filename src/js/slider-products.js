// настройка слайдера для product
const swiperProduct = new Swiper('.product__slider', {
  // Optional parameters

  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: false,
  },

  slidesPerView: 1,
  spaceBetween: 20,
  //   autoplay: {
  //     delay: 1000,
  //     disableOnInteraction: false,
  //     stopOnLastSlide: false,

  //   },
  speed: 1000,
  breakpoints: {
    //     // when window width is >= 320px
    768: {
      slidesPerView: 2.5,
      spaceBetween: 18,
    },
    //     // when window width is >= 480px
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    //     // when window width is >= 640px
    //     640: {
    //       slidesPerView: 4,
    //       spaceBetween: 40
    //     }
  },
});
