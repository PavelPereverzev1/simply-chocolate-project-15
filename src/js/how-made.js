//HOW-MADE SECTIOM
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    modal: document.querySelector('[data-img-modal]'),
    iframe: document.querySelector('.iframe'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
    refs.iframe.setAttribute(
      'src',
      'https://www.youtube-nocookie.com/embed/JgzkfO8nYKo?autoplay=1&autohide=1'
    );
    refs.iframe.style.display = 'block';
  }
})();
