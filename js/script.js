const navToggle = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.navmenu-container');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

new VenoBox({
  selector: '.my-img-link',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane',
});

new VenoBox({
  selector: '.my-video-link',
});
