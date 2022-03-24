let a: unknown = 30;
let b = a === 30;
let e = a === 20;
let c = a + 20; // error
if (typeof a === 'number') {
    console.log(a + 10); //40
}
console.log(a);
console.log(b); //true
console.log(e); //false
console.log(c);