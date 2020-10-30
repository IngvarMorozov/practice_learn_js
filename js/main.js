'use strict';

// // Copying objects

// const user = {
//   name: 'Ivan',
// };
// console.log(user.name);
// const admin = user;
// admin.name = 'Igor';
// console.log(user.name); // Igor

// // Objects comparison

// console.log(admin === user); // true

// const a = { name: 'Igor' };
// const b = { name: 'Igor' };

// console.log(a === b);

// // Cloning

// const user = {
//   name: 'Ivan',
//   age: 30,
// };

// // const clone = {};

// // for (const key in user) {
// //   clone[key] = user[key];
// // }

// // clone.name = 'Igor';
// // console.log(user.name);

// // or you can use method Object.assign

// const clone = Object.assign({}, user);
// clone.name = 'Igor';
// console.log(clone.name);
// console.log(user.name);

// Embedded cloning

// const user = {
//   name: 'Ivan',
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };
// console.log(user.sizes.height);

// const clone = Object.assign({}, user);

// console.log(clone.sizes === user.sizes);
// user.sizes.width++;
// console.log(clone.sizes);

//_.cloneDeep Method + you need to install Lodash library

// const objects = [{ a: 1 }, { b: 2 }];

// const deep = _.cloneDeep(objects);
// console.log(deep[0] === objects[0]); // => false
