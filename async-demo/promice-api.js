const { result, reject } = require("underscore");

// const p = Promise.reject(new Error('rejacting error'));
// p.catch(err => console.log(err));

const p1 = new Promise((resolve, reject)=>{
    console.log('Async operation 1');
    reject(new Error ('testing error'));
}, 2000);

const p2 = new Promise((resolve, reject)=>{
    console.log('Async operation 2');
    resolve(2);
}, 2000);

Promise.all([p1, p2])
  .then(result=>console.log(result))
  .catch(err => console.log('Error', err.message))