'use strict';

// function createCalcFunction(n) {
//   return function() {
//     console.log(1000 * n);
//   }
// }
// const calc = createCalcFunction(42);
// calc(30);

// function createIncrementor(n) {
//   return function(num){
//     return n + num;
//   }
// }
// const addOne = createIncrementor(1);
// console.log(addOne(3));

function urlGenerator(domain) {
  return function(url) {
    return `https://${url}.${domain}`
  }
}

const comUrl = urlGenerator('com')
console.log(comUrl('google'));
const uaUrl = urlGenerator('ua');
console.log(uaUrl('dou'));