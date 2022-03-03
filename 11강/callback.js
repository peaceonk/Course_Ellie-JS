'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration 이 실행시 위로 선언 되는 것.

console.log('1');
console.log('2');
console.log('3');

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'),2000);



// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        // 실제 백엔드가 없으므로 있다고 가정하여 어느정도 시간 뒤에 데이터를 가져오는 것처럼 만듬
        setTimeout(() => {  
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'))
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin'})
            } else {
                onError(new Error('no access'));
            }
        }, 100);
    }
};

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error => {
                console.log(error);
            }
        )
    },
    error => {console.log(error);}
);

