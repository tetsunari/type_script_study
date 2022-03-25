let a: [number] = [1];

let b: [string, string, number] = ['apple', 'banana', 1];
console.log(b); // [ 'apple', 'banana', 1 ]
b = ['test', 'test2', 2];
console.log(b); // [ 'test', 'test2', 2 ]
b = ['queen', 'elizabeth', 'II', 19];
console.log(b); // error
// src/index.ts:7:28 - error TS2322: Type 'string' is not assignable to type 'number'.
//
// 7 b = ['queen', 'elizabeth', 'II', 19];