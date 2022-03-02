
'use strict'

// 2. Variable          rw(read/write)
// let( added in ES6)

let global_scope = 'global';

{
    let name = 'Peace';
    console.log(name);
    name = 'hello';
    console.log(name);

    console.log(global_scope);
}
// console.log(name);
console.log(global_scope);


// var (don't ever use this!)
// var hoisting(move declaration from bottom to top : 선언을 끌어올림) : 
// // console.log(age);
age = 4;
var age;
console.log(age);


// 3. constant         r(read)
// use const whenever possible.
// only use let if variable needs to change.

const dayInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reason:
//  - security
//  - thread safety
//  - reduce human mistakes



// Variable Types
//  primitive, single item : number, string, boolean, null, undefined, 
//  object, box container : array
//  function, first-class function


// number

const count = 17; // integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

    // bigInt ( fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890;  //  over ( -2^53 ~ 2^53 ) 
const bigInt2 = 1234567890123456789012345678901234567890n;  //  over ( -2^53 ~ 2^53 ) 
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;   // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ', type ' + typeof helloBob);


// boolean
// false: 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
let y = undefined;
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${y}, type: ${typeof y}`);

// Symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1);
console.log(symbol2);
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1);
console.log(gSymbol2);
console.log(gSymbol1 === gSymbol2);

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// Object, real-life object, data structure
const ellie = { name: 'ellie', age: 20};
console.log(ellie);
console.log(`value: ${ellie}, type: ${typeof ellie}`);
ellie.name = 'not_ellie';
ellie.age = 2;
console.log(ellie);
console.log(`value: ${ellie}, type: ${typeof ellie}`);

ellie = { name: 'ellie', age: 20};


// Dynamic Typing : dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = 5 + '7';
console.log(`value: ${text}, type: ${typeof text}`);
text = '6' / '2';
console.log(`value: ${text}, type: ${typeof text}`);