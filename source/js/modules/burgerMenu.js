// import '../modules/animationBtn';

const burgerMenu = () => {
  const menuBtn = document.getElementById('menu-btn'),
        menu = document.querySelector('.header-menu');

  menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('open')) {
      menu.classList.add('header-menu--open');
    } else {
      menu.classList.remove('header-menu--open');
    }

  });


};

export default burgerMenu;
