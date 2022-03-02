'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);


// 3. Lopping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits);
}
// b. for of
for(let fruit of fruits){
    console.log(fruit);
}
//c. forEach
fruits.forEach(function(fruit, index, array) {
    console.log(fruit);
    console.log(index);
    // 보통 어레이는 잘 받아오지 않음
    console.log(array);
});
// 위에 forEach에서 필요없는 index와 array를 없애고 Callback함수를 줄여서 아래처럼 쓸 수있음
fruits.forEach((fruit) => console.log(fruit));


// 4. Addition, Deletion, Copy
// push: add an item to the end
fruits.push('ichigo','momo');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('strawberry','lemon');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('strawberry','peach','lemon');
console.log(fruits);
fruits.splice(1);
// 시작인덱스만 지정하면 그 뒤의 모든 인덱스를 다 지워버림
console.log(fruits);
fruits.push('banana','strawberry','peach','lemon');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
// 해당 인덱스 데이터를 지우고 원하는 데이터 넣기
fruits.splice(1,1,'greenapple','watermelon');
console.log(fruits);

// concat: combine two arrays
const fruits2 = ['pair','coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// find the index
console.log(fruits);

// indexOf
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('coconut'));

// includes
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('coconut'));

// lastIndexOf
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));

