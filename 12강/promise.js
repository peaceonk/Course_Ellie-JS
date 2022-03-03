'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// where new Promise is created, the executor runs automatically.

const promise = new Promise((resolve, reject) => {
    //doing some heavy work(network, read files)
    console.log('doing something...');

    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000)
});


// 2. Consumers : then, catch, finally
promise 
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1),1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
    setTimeout(() => resolve('chicken'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => egg`), 1000);
        setTimeout(() => reject(new Error(`Error!   ${hen} => egg`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => fried`), 1000);
    });

getHen()
    // .then(hen => getEgg(hen))
    // 받아온 값을 바로 사용하는 경우에 이런식으로 생략이 가능하다.
    .then(getEgg)
    .catch(error => {
        return 'bread';
    })
    // .then(egg => cook(egg))
    .then(cook)
    // .then(meal => console.log(meal));
    .then(console.log)
    .catch(console.log);


