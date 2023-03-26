import '@babel/polyfill';

import '../index.html';

import '../style/index.scss';
import preloader from './modules/preloader';
import animationBtn from './modules/animationBtn';
import burgerMenu from './modules/burgerMenu';

//* Адаптивные элементы на странице
import createAdaptive from './modules/createAdaptive';

preloader();

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  createAdaptive();
  animationBtn();
  burgerMenu();

})


