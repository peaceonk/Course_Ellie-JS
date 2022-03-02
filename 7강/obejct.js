

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in javaScript are instances of Object
// object = { key : value };

// 1. Literals and properties

const name = 'ellie';
const age = 4;

// 함수를 만들고 싶다면 둘 다 넣어줘야함
function print(name, age) {
    console.log(name);
    console.log(age);
}

// 출력하고 싶어도 2개 설정해줘야함
print(name, age);


const ellie = {name: 'ellie', age: 4}

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

print(ellie);

// 오브젝트를 만드는 법
const obj1 = {};             // 'Object literal' syntax
const obj2 = new Object();   // 'Object constructor' syntax

// JS의 동적으로 타입이 결정되므로 아래가 가능은 하다~
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);


// 2. Computed properties
// key should be a always string

console.log(ellie.name);

// Computed properties

console.log(ellie['name']);
    // 키는 '' 문자(string)로 넣어줘야한다.    
console.log(ellie[name]);

ellie['hasJob'] = true;
console.log(ellie.hasJob);


// key를 모를 경우 . 으로 는 출력할 수없음.
function printValue(obj, key) {
    console.log(obj.key);
}
// printValue(ellie, 'name');


function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};


function makePerson(name,age) {
    return {
        // name: name,
        // age: age,

        // JS에서는 Property value shorthand를 통해
        // 위와같이 쓰지 않고 생략이 가능하다.
        name, age
    };
}
const person4 = makePerson('ellie', 30)

console.log(person4);


// 4. Constructor Function
function Person(name,age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

const peron5 = new Person('peace', 29);


// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);

console.log('random' in ellie);
console.log(ellie.random);


// 6. for..in  vs  for..of

// for (key in obj)
for (key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

for(value of array) {
    console.log(value);
}


// 7. Cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = {name: 'ellie', age:'20'};
const user2 = user;

// 둘은 완벽하게 같은 주소의 값을 레퍼런스 하고 있으므로
console.log(user==user2);
console.log(user===user2);

// 하나를 바꾸면 나머지 하나도 같이 바뀜
user2.name = 'coder';
console.log(user.name);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// assign
const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red' }
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
// 동일한 property는 뒤로가면서 자동으로 덮어 씌어지기 때문에 blue가 나옴