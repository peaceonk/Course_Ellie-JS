// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)

let json = JSON.stringify(true);
console.log(json);

let json2 = JSON.stringify('apple','banana');
console.log(json2);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

let json3 = JSON.stringify(rabbit);
console.log(json3);

let json4 = JSON.stringify(rabbit, ['name', 'color']);
console.log(json4);

let json5 = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'name' ? 'ellie' : value;
});
console.log(json5);

// 2. JSON to Object
// parse(json)

json = JSON.stringify(rabbit);

const obj = JSON.parse(json);
console.log(obj);
// rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate());

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return  key === 'birthDate' ? new Date(value) : value;
})

console.log(rabbit.birthDate.getDate());
console.log(obj2.birthDate.getDate());
