"use strict";
<<<<<<< HEAD
let Message;
const myCat = {
    age: 3,
    weight: 5.2,
};
Message = "うちの猫は" + myCat.age + '歳で、体重は' + myCat.weight + 'kgです';
console.log(Message);
=======
let reserve = (from, toOrDestination, destination) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        return 'go';
    }
    else if (typeof toOrDestination === 'string') {
        return 'back';
    }
    return 'no reservation';
};
let now = new Date(2022, 4, 8);
let tomorrow = new Date(2022, 4, 9);
// console.log(now);
// console.log(tomorrow);
console.log(reserve(now, tomorrow, 'japan')); // go
console.log(reserve(now, 'japan')); // back
>>>>>>> 952182ab1b7e13dba71d3f0a4097742bf668f51c
//# sourceMappingURL=index.js.map