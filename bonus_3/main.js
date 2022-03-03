if (true) {
    console.log('true');
} else {
    console.log('false');
}

if (false) {
    console.log('true');
} else {
    console.log('false');
}

// false: 0 , -0, '', null, undefined
// true:  -1,  some string', 'false', [empty array]

if (0) {
    console.log('true');
} else {
    console.log('false');
}
if (-0) {
    console.log('true');
} else {
    console.log('false');
}
if ('') {
    console.log('true');
} else {
    console.log('false');
}
if (null) {
    console.log('true');
} else {
    console.log('false');
}
if (undefined) {
    console.log('true');
} else {
    console.log('false');
}


if (-1) {
    console.log('true');
} else {
    console.log('false');
}
if (1) {
    console.log('true');
} else {
    console.log('false');
}
if ('asdf') {
    console.log('true');
} else {
    console.log('false');
}
if ([]) {
    console.log('true');
} else {
    console.log('false');
}



let num;

if (num) {
    console.log('true');
} else {
    console.log('false');
}


num = '';

if (num) {
    console.log('true');
} else {
    console.log('false');
}

num = 'some';

if (num) {
    console.log('true');
} else {
    console.log('false');
}


num && console.log(num);
// => console : 'some'

let num2;

num2 && console.log(num);
// => console : 
// num2 가 false이기 때문에 뒤에 console ~~~ 는 실행도 되지 않음.



let obj;
if(obj) {
    console.log(obj);
}

// error
// console.log(obj.name);

obj && console.log(obj.name);