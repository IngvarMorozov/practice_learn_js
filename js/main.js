'use strict';

const spam = ['viagra', 'xxx', 'innocent'];

function checkSpam(str) {
  for (let i = 0; i < spam.length; i++) {
    if (str.toLowerCase().includes(spam[i])) {
      return true;
    }
  }
  return false;
}
console.log(checkSpam('buy vIagra now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

spam[length] = 'fuck';
console.log(checkSpam('Igor fuck Max'));
