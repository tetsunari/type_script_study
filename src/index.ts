const enum Language {
    English = 1,
    Spanish = 2,
    Japanese = 3
}

let a = Language.English;
let b = Language.Tagalog;
let c = Language[0];
let d = Language[8];

console.log(a); // 1
console.log(b);
console.log(c);
console.log(d);

// error
// src/index.ts:8:18 - error TS2339: Property 'Tagalog' does not exist on type 'typeof Language'.
//
// 8 let b = Language.Tagalog;
// ~~~~~~~
//
//     src/index.ts:9:18 - error TS2476: A const enum member can only be accessed using a string literal.
//
// 9 let c = Language[0];
// ~
//
//     src/index.ts:10:18 - error TS2476: A const enum member can only be accessed using a string literal.
//
// 10 let d = Language[8];
// ~
//
//
//     Found 3 errors in the same file, starting at: src/index.ts:8
