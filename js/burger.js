function preventScroll(e){
  e.preventDefault();
  e.stopPropagation();

  return false;
}

function initBurger() {
  const burgerBtns = document.querySelectorAll('.burger-btn');
  const burgerMenu = document.querySelector('.burger-menu');

  function toggleMenu() {
    burgerMenu.classList.toggle('hidden');
    burgerBtns.forEach(btn => {
      btn.classList.toggle('hidden');
    })
  }

  function toggleOverflow(){
    document.body.classList.toggle('overflow-hidden');
  }

  burgerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      toggleMenu();
      toggleOverflow();
    });
  })
}

export { initBurger };
