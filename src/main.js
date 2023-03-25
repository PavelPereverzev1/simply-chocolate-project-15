const swiper = new Swiper(".rewiews-slider", {
   // Optional parameters
 
   loop: true,
 
   // If we need pagination
   pagination: {
     el: ".swiper-pagination",
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
            slidesPerView: 2,
            spaceBetween: 16
         },
   //     // when window width is >= 480px
         1200: {
            slidesPerView: 3,
            spaceBetween: 28
         },
   //     // when window width is >= 640px
   //     640: {
   //       slidesPerView: 4,
   //       spaceBetween: 40
   //     }
     }
 });
