// import '../modules/animationBtn';

const burgerMenu = () => {

  const menuBtn = document.querySelector('.menu-btn'),
        menu = document.querySelector('.header-menu');

  menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('menu-btn--open')) {
      menu.classList.add('header-menu--open');
      menu.classList.remove('header-menu--close');
    } else {
      menu.classList.add('header-menu--close');
      menu.classList.remove('header-menu--open');
    }

  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      // console.log('Up to 900px');
      menuBtn.classList.remove('menu-btn--open');
      menu.classList.remove('header-menu--open');
    } else {
      menuBtn.classList.add('menu-btn--close');
      menu.classList.add('header-menu--close');
    }
  });

};

export default burgerMenu;
