// Don't give up

// 함수 선언

function doSomething() {
    console.log('hello');
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

function doSomething2(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}


// 함수 호출
doSomething();

const result = add(1, 2);
console.log(result);

doSomething2(add);

const addFun = add;
console.log(addFun);
const result_addFun = addFun(1, 2);
console.log(result_addFun);