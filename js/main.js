'use strict';

// Constructors, creating objects through "new"

// Constructor Function - is common function. But
// 1. The name of the design function must start with a capital letter.
// 2. The design function must be called with the "new" operator.

// Example
// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// const user = new User('Vasyl');

// console.log(user.name);
// console.log(user.isAdmin);

// Calculator

// function Calculator() {
//   this.read = function () {
//     this.a = Number(prompt('Please enter first number', 0));
//     this.b = Number(prompt('Please enter second number', 0));
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// const calculator = new Calculator();
// calculator.read();
// alert(`Sum = ${calculator.sum()}`);
// alert(`Mul = ${calculator.mul()}`);

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
