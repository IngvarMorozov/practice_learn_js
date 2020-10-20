'use strict';

// function min(a, b) {
//   if (a > b) {
//     return b;
//   } else if (a < b) {
//     return a;
//   }
//   return a;
// }
// console.log(min(2, 1));
// console.log(min(2, -1));
// console.log(min(1, 1));

// Functions
// function pow(x, n = 2) {
//   const temp = x ** n;
//   return temp;
// }
// pow(2);

// // Function Expression
// const sayHi = function() {
//   console.log('Hello World');
// };

// Function-"callback"
// when we pass functions as value

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// function showOk() {
//   alert('You are agree');
// }
// function showCancel() {
//   alert('You canceled ');
// }

// ask('Are you agree?', showOk, showCancel);

// переопределение

// const age = 16;

// let welcome;

// if (age < 18) {
//   welcome = function () {
//     console.log('hello');
//   };
//   welcome();
// }
// welcome();
// welcome = function () {
//   console.log('Hi');
// };

// welcome();

// Arrow Functions

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// function showOk() {
//   alert('You are agree');
// }
// function showCancel() {
//   alert('You canceled ');
// }



const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
const showOk = () => alert('You are agree');
const showCancel = () => alert('You canceled');

ask('Are you agree?', showOk, showCancel);

