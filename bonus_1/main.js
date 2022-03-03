// number, string, boolean, null, undefined
let number = 2;
let num = '2';

let number2 = number;

console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);


// object
let obj = {
    name: 'ellie',
    age: 5,
};

// 이런식으로 obj2에 obj를 넣어주면 해당 주소값을 넣는 것!
// 즉 하나만 바꿔도 나머지 하나도 값이 바뀜.
let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';

console.log(obj2.name);

// object를 const로 선언할 경우
const obj3 = {
    name: 'james',
    age: 7,
};
// object 자체는 변경 불가능
obj3 = {
    name: 'tom',
    age: 5,
};
// 으브젝트 내의 요소별로는 변경 가능
obj3.name = 'tom';
obj3.age = 5;