"use strict";
let c = {
    firstName: 'John',
    lastName: 'Smith'
};
console.log(c);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
c = new Person('matt', 'Bob');
console.log(c);
//# sourceMappingURL=index.js.map