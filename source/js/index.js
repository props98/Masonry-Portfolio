import '@babel/polyfill';

import '../index.html';
// import '../page-1.html';
// import '../page-2.html';

import '../style/index.scss';

import createPosts from './modules/createPosts';
import generateMasonry from './modules/generateMasonry';
// import createAdaptive from './modules/createAdaptive';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let imageIndex = 0;
  let previousScreenSize = window.innerWidth;

  window.addEventListener('resize', () => {
    imageIndex = 0;

    if (window.innerWidth < 600 && previousScreenSize <= 600) {
      generateMasonry(1, createPosts(imageIndex));
      console.log('width 600px');
    } else if (
      window.innerWidth >= 600 && window.innerWidth < 900 && (previousScreenSize < 600 || previousScreenSize >= 900)) {
      generateMasonry(2, createPosts(imageIndex));
    } else if (window.innerWidth >= 900 && previousScreenSize < 900) {
      generateMasonry(4, createPosts(imageIndex));
    }
    previousScreenSize = window.innerWidth;

  })

  // Page load
  if (previousScreenSize < 600) {
    generateMasonry(1, createPosts(imageIndex));
  } else if (previousScreenSize >= 600 && previousScreenSize < 900) {
    generateMasonry(2, createPosts(imageIndex));
  } else {
    generateMasonry(4, createPosts(imageIndex));
  }

  //TODO: Доделать адаптивность на мобильном устройстве
  //TODO: Сделать модуль для отрисовки постов на странице

})


