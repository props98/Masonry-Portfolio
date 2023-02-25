import '@babel/polyfill';
import './index.html';
import './index.scss';

// import code from './img/test.jpeg';
// const img = new Image();
// img.src = test;

import {mult, sum} from './modules/calc';
console.log(mult(3 ,5));
console.log(sum(3 ,5));


