// 저번에 만든 callback bad 코드를 promise를 통해 작성
'use strict';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class UserStorage {
    async loginUser(id, password) {
        if(
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
        ) {
            await delay(1000);
            return id;
        } else{
            return new Error('not found');
        }
        
    }
    

    async getRoles(user) {
        if(user === 'ellie') {
            await delay(1000);
            return { name: 'ellie', role: 'admin'};
        } else {
            return new Error('no access');
        }
    }
    
};

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id,password)
    .then(userStorage.getRoles)
    .then(user => alert( `Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);




// const userStorage = new UserStorage();
// const id = prompt("enter your id");
// const password = prompt("enter your password");

// async function checkUser() {
//   try {
//     const userId = await userStorage.loginUser(id, password);
//     const user = await userStorage.getRoles(userId);
//     alert(`Hello ${user.name}, you have a ${user.role}`);
//   } catch (error) {
//     console.log(error);
//   }
// }