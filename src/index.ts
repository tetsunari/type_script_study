let c: {
    firstName: string,
    lastName: string
} = {
    firstName: 'John',
    lastName: 'Smith'
}
console.log(c); // { firstName: 'John', lastName: 'Smith' }

class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ) {
    }
}

c = new Person('matt', 'Bob');
console.log(c); // Person { firstName: 'matt', lastName: 'Bob' }