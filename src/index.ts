let as: readonly number[] = [1, 2, 3];
let bs: readonly number[] = as.concat(4);
let cs: readonly number[] = as.slice(1, 2);
let three = bs[2];

console.log(as); // [ 1, 2, 3 ]
console.log(bs); // [ 1, 2, 3, 4 ]
console.log(cs); // [ 2 ]
console.log(three); // 3

as[4] = 5;
as.push(6);

// error
// src/index.ts:11:1 - error TS2542: Index signature in type 'readonly number[]' only permits reading.
//
// 11 as[4] = 5;
// ~~~~~
//
//     src/index.ts:12:4 - error TS2339: Property 'push' does not exist on type 'readonly number[]'.
//
// 12 as.push(6);
// ~~~~
