type Cat = {name: string, purrs: boolean};
type Dog = {name: string, barks: boolean, wags: boolean};
type CatOrDogOrBoth = Cat | Dog;
type CatAndDpg = Cat & Dog;

// Cat
let a: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true
}
console.log(a); // { name: 'Bonkers', purrs: true }
// Dog
a = {
    name: 'Domino',
    barks: true,
    wags: true,
}
console.log(a); // { name: 'Domino', barks: true, wags: true }
// Both
a = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
}
console.log(a); // { name: 'Donkers', barks: true, purrs: true, wags: true }