
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(pram1, pram2) { body... return; }
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
    return message;
}

log('Hello@');
log(1234);


// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);


// 3. Default parameters (added in ES6)

function showMessage(message, from) {
    if (from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

function showMessage2(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage2('Hi!');


// 4. Rest parameters (added in ES6)

function printAll (...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','ellie');


// 5. Local scope

let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello'; // local variable
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    printAnother();
    console.log(childMessage);
}
printMessage();
console.log(message);


// 6. Return a value

function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit

// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

//good (가독성 향상)
function upgradeUser2(user) {
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic....
}


// first-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

// const print = function () {     // anonymous function
const print = function print2() {     // named function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    }else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
}
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!');

const add = function(a, b) { return a + b };
const add2 = (a, b) => a + b;

add(1, 3);
add2(1, 4);

const add3 = (a, b) => {
    //do something more
    return a + b;
}


// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();



// Fun quiz time
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));
console.log(calculate('subtract', 2, 3));
console.log(calculate('divide', 2, 3));
console.log(calculate('multiply', 2, 3));
console.log(calculate('remainder', 2, 3));
console.log(calculate('X', 2, 3));