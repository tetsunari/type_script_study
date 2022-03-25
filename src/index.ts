let a = [1, 2, 3];
var b = ['a', 'b'];
let c: string[] = ['a'];
let d = [1, 'a'];
const e = [2, 'b'];

let f = ['red'];
f.push('blue');
f.push(true);

let g = [];
g.push(1);
g.push(true);

let h: number[] = [];
h.push(1);
h.push('blue');

// error
// src/index.ts:9:8 - error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string'.
//
// 9 f.push(true);
// ~~~~
//
//     src/index.ts:17:8 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
//
// 17 h.push('blue');
// ~~~~~~