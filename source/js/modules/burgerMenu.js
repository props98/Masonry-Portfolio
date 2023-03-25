const burgerMenu = () => {

  const menuBtn = document.querySelector('.menu-btn'),
        menu = document.querySelector('.header-menu__list');

  let doubleColumns = 900,
      previousScreenSize = window.innerWidth;

  menuBtn.addEventListener('click', () => {

    if (menuBtn.classList.contains('menu-btn--open')) {
      menu.classList.add('header-menu__list--open');
      menu.classList.remove('header-menu__list--close');
    } else {
      menu.classList.add('header-menu__list--close');
      menu.classList.remove('header-menu__list--open');
    }

  });

  window.addEventListener('resize', () => {

    if (window.innerWidth >= doubleColumns || previousScreenSize < doubleColumns) {
      menuBtn.classList.remove('menu-btn--open');
      menuBtn.classList.add('menu-btn--close');
      menu.classList.remove('header-menu__list--open');
      menu.classList.add('header-menu__list--close');
    }

  });

};

export default burgerMenu;
