'use strict';

// console.log('Request data...');

// setTimeout(() => {
//   console.log('Preparing data...');

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working',
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log('Data received', backendData);
//   }, 2000);
// }, 2000);

// resolve - викликається, коли операція завершена і успішно
// reject -
// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('Preparing data...');
//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working',
//     };
//     resolve(backendData); // we say to Promise that it has completed his execution and pass the object to then
//   }, 2000);
// });

// // then виконується коли закінчиться асинхронна операція
// // chain - запис через точку,
// p.then(data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//     }, 2000);
//   });
//   // p2.then(clientData => {
//   //   console.log('Data received', clientData);
//   // });
// }).then(clientData => {
//   console.log('Data received', clientData);
//   clientData.fromPromise = true;
//   return clientData;
// }).then(data => {
//   console.log(data);
// })
// .catch(err => console.error('Error: ', err))
// .finally(() => console.log('Finally'));

// const sleep = ms => {
//   return new Promise(resolve => setTimeout(() => resolve(), ms));
// };
// // sleep(2000).then(() => console.log('After 2 sec'));

// Promise.all([sleep(2000), sleep(3000)]).then(() => {
//   console.log('All promises');
// });
// Promise.race([sleep(2000), sleep(3000)]).then(() => {
//   console.log('Race promises');
// });
