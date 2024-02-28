const navToggle = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.navmenu-container');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
