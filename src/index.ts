let user: {
    readonly firstName: string
} = {
    firstName: 'andy'
};
console.log(user);

console.log(user.firstName);

let test = user.firstName = 'andy with an a';
console.log(test);