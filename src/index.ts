let a = [1, 2, 3];
var b = ['a', 'b'];
let c: string[] = ['a'];
let d = [1, 'a'];
const e = [2, 'b'];

function buildArray(): (string|number)[] {
    // : (string|number)[]は明示的にしなくてもいい
    let g = []; // any[]
    g.push(1); // number[]
    g.push('x'); // (string | number)[]
    return g;
}

let myArray = buildArray();
console.log(typeof myArray); // object
myArray.push(true);

// error
// src/index.ts:16:14 - error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
//
// 16 myArray.push(true);
// ~~~~