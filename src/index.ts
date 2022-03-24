type Age = number;

type Person = {
    name: string,
    age: Age
};

// let age: Age = 55;
//
// let driver: Person = {
//     name: 'James May',
//     age: age
// }

let age = 55;

let driver: Person = {
    name: 'James May',
    age
}

console.log(driver); // { name: 'James May', age: 55 }