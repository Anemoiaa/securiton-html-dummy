function initModals() {
  const modalBtns = document.querySelectorAll('[data-modal-btn]');
  const closeButtons = document.querySelectorAll('.modal-close');
  const bluredBackdrop = document.querySelector('.blured-backdrop')

  if (!modalBtns.length) {
    return;
  }

  function toggles(modal) {
    modal.classList.toggle('hidden');
    bluredBackdrop.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
  }

  modalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modalName = btn.getAttribute('data-modal-btn');
      const modal = document.querySelector(`[data-modal="${modalName}"]`);
      if (modal) {
        toggles(modal);
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('[data-modal]');
      if (modal) {
        toggles(modal);
      }
    });
  });
}

export { initModals };
