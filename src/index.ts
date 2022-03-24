let a: {b: number};
a = {};
a = {
    b: 1,
    c: 2,
};

let i: number;
let j = i * 2;

let k;
let l = k * 2;

// error
// src/index.ts:2:1 - error TS2741: Property 'b' is missing in type '{}' but required in type '{ b: number; }'.
//
// 2 a = {};
// ~
//
//     src/index.ts:1:9
// 1 let a: {b: number};
// ~
//     'b' is declared here.
//
//     src/index.ts:5:5 - error TS2322: Type '{ b: number; c: number; }' is not assignable to type '{ b: number; }'.
//     Object literal may only specify known properties, and 'c' does not exist in type '{ b: number; }'.
//
// 5     c: 2,
// ~~~~
//
//     src/index.ts:9:9 - error TS2454: Variable 'i' is used before being assigned.
//
// 9 let j = i * 2;
// ~
//
//     src/index.ts:12:9 - error TS2532: Object is possibly 'undefined'.
//
// 12 let l = k * 2;
// ~