// настройка слайдера для sellers-modal
const swiperSellers = new Swiper('.sellers__slide', {
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
      slidesPerView: 3,
      spaceBetween: 16,
    },
    //     // when window width is >= 480px

    //     // when window width is >= 640px
    //     640: {
    //       slidesPerView: 4,
    //       spaceBetween: 40
    //     }
  },
});
