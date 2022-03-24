type Cat = {name: string, purrs: boolean};
type Dog = {name: string, barks: boolean, wags: boolean};
type CatOrDogOrBoth = Cat | Dog;
type CatAndDpg = Cat & Dog;

// intersection
let b: CatAndDpg = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: false
}
console.log(b); // { name: 'Domino', barks: true, purrs: true, wags: false }