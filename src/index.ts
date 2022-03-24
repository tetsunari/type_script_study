type Color = 'red';

let x = Math.random();

if (x) {
    type Color = 'blue';
    const b: Color = 'blue';
} else {
    const c: Color = 'red';
}

console.log(b);
console.log(c);

// error
// src/index.ts:12:13 - error TS2304: Cannot find name 'b'.
//
// 12 console.log(b);
// ~
//
//     src/index.ts:13:13 - error TS2304: Cannot find name 'c'.
//
// 13 console.log(c);
// ~
//
//
//     Found 2 errors in the same file, starting at: src/index.ts:12