const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 3;
const num4 = 4;
const result2 = num3 + num4;
console.log(result2);

function add(a, b) {
    return a + b;
}

const sum = add(5, 6);
console.log(sum);


const doSomething = add;

const result4 = doSomething(7, 8);
console.log(result4);
const result5 = add(9, 10);
console.log(result5);

function print() {
    console.log('print');
}
print('asdf',2);

function print(name, age) {
    console.log(`${name} : ${age}`);
}
print('qwer',15);

function surprise(operator) {
    // const result = operator();
    const result = operator(2, 3);
    console.log(result);
}

// surprise();
surprise(add);


function devide(num1, num2) {
    return num1 / num2;
}

surprise(devide);