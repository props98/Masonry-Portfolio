const animationBtn = () => {

  let menuBtn = document.querySelector('.menu-btn');

  menuBtn.addEventListener('click', (e) => {
      e.preventDefault();

      if ( menuBtn.classList.contains('menu-btn--open') ){
        menuBtn.classList.remove('menu-btn--open');
        menuBtn.classList.add('menu-btn--close');
      } else {
        menuBtn.classList.remove('menu-btn--close');
        menuBtn.classList.add('menu-btn--open');
      }
  });
}

export default animationBtn;
