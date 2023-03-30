import preloaderAnimation from './preloaderAnimation';

const loader = () => {
  const preloader = document.querySelector('.preloader');

  preloaderAnimation();

  // setTimeout( () => {
  //   preloader.classList.add('show-preloader');
  //   // if (preloader.classList.contains('show-preloader')) {
  //   //   preloader.style.opacity = 0;
  //   // }
  // }, 3000);

  // let loader;

  function loaderNow(opacity) {
    if (opacity <= 0) {
      displayContent();
    } else {
      preloader.style.opacity = opacity;
      setTimeout(function() {
        loaderNow(opacity - 0.10)
      }, 70)
    }
  }

  function displayContent() {
    preloader.style.display = 'none';
  }

  setTimeout( () => {
    loaderNow(1);
  }, 1000);

}

export default loader;
