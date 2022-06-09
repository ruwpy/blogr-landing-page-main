// burger menu

const burgerToggle = document.querySelector('.header__toggle')
const burgerMenu = document.querySelector('.collapsed')

burgerToggle.addEventListener('click', () => {
  burgerToggle.classList.toggle('open');
  burgerMenu.classList.toggle('collapsed');
})

