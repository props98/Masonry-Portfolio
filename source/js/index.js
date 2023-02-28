import '@babel/polyfill';

import '../index.html';
// import '../page-1.html';

import '../style/index.scss';

//* Обработка данных для постов
// import createPosts from './modules/createPosts';
//* Отрисока элементов на странице
// import generateMasonry from './modules/generateMasonry';
//* Адаптивные элементы на странице
import createAdaptive from './modules/createAdaptive';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  createAdaptive();

  //TODO: Доделать адаптивность на мобильном устройстве

})


