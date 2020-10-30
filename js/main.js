'use strict';

// Object's methods

// Easy example
// const user = {
//   name: 'John',
//   age: 30,
// };

// user.sayHi = function () {
//   console.log('Hello');
// };

// user.sayHi();

// Shortened method notation
// const user = {
//   sayHi() {
//     console.log('Say Hello');
//   }
// }
// user.sayHi();

// Keyword <<This>> in methods

// const user = {
//   name: 'John',
//   age: 30,
//   sayName() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// user.sayName();

// Tasks

// function makeUser() {
//   return {
//     name: "Джон",
//     ref: this
//   };
// };

// let user = makeUser();

// alert( user.ref.name ); // E R R O R

// function makeUser() {
//   return {
//     name: "Джон",
//     ref() {
//       return this;
//     }
//   };
// };

// let user = makeUser();

// console.log( user.ref().name ); // Джон

// Calculator

// const calculator = {
//   read() {
//     this.a = Number(prompt('Please enter first number', 0));
//     this.b = Number(prompt('Please enter second number', 0));
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   }
// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Ladder

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     console.log(this.step);
//     return this;
//   },
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

// ladder.up().up().up().down().showStep().up().up().showStep(); // 1
