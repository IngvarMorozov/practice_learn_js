'use strict';

// O B J E C T S

// Practice
// Task 1
// const user = {
//   name: 'John',
//   surname: 'Smith',
// };
// user.name = 'Pete';
// delete user.name;
// console.log();

// Task 2
// function isEmpty(obj) {
//   for (const key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }
// const schedule = {};
// console.log(isEmpty(schedule));
// schedule['8:30'] = 'get up';
// console.log(isEmpty(schedule));

// Task 3
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// let sum = 0; // or
// if (!isEmpty(salaries)) {
//   for (const key in salaries) {
//     sum += salaries[key];
//   }
// } else {
//   sum = 0;
// }
// console.log(sum);

// // Task 4
// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// const menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };
// console.log(menu);

// multiplyNumeric(menu);
// console.log(menu);
