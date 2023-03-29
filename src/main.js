(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
})();

// настройка слайдера для rewiews
const swiper = new Swiper('.rewiews-slider', {
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
      slidesPerView: 2,
      spaceBetween: 16,
    },
    //     // when window width is >= 480px
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
    //     // when window width is >= 640px
    //     640: {
    //       slidesPerView: 4,
    //       spaceBetween: 40
    //     }
  },
});

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

// скрипт модалки====================

!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close'),
    forms = document.querySelectorAll('form'); // выбираем формы документа

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function (e) {
      /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
      e.preventDefault();

      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
      modalElem.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }); // end click
  }); // end foreach

  forms.forEach(function (item) {
    // перебираем формы
    item.addEventListener('submit', function (e) {
      // назначаем на каждую обработчик submit
      e.preventDefault(); // прерываем submit
      // останавливает цепочку вызова событий для следующих слушателей
      e.stopImmediatePropagation();
      var parentModal = this.closest('.modal');
      parentModal.classList.remove('active');
      item.reset();
      var modalId = parentModal.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + modalId + '"]');
        modalElem.classList.add('active');
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }); // end foreach

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
      }
    },
    false
  );

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
    document.body.style.overflow = '';
  });
}); // end ready

// конец скрипта модалки

//HOW-MADE SECTIOM
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    modal2: document.querySelector('[data-modal]'),
    iframe: document.querySelector('.iframe'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal2.classList.toggle('visually-hidden');
    refs.iframe.setAttribute(
      'src',
      'https://www.youtube-nocookie.com/embed/JgzkfO8nYKo?autoplay=1&autohide=1'
    );
    refs.iframe.style.display = 'block';
  }
})();
