import '@babel/polyfill';

import '../index.html';

import '../style/index.scss';
import loader from './modules/loader';
import animationBtn from './modules/animationBtn';
import burgerMenu from './modules/burgerMenu';

//* Адаптивные элементы на странице
import createAdaptive from './modules/createAdaptive';

// Turn On preloader
// loader();

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  createAdaptive();
  animationBtn();
  burgerMenu();

})


