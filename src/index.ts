let a : {
    b: number,
    c?: string,
    [key: number]: boolean
}

a = {b: 1};
a = {b: 1, c: undefined};
a = {b: 1, c: 'c'};
a = {b: 1, 10: true};
a = {b: 1, 10: true, 20: false};
a = {20: true};
a = {b: 1, 33: 'red'}


// error(下二つ)
// src/index.ts:12:1 - error TS2741: Property 'b' is missing in type '{ 20: true; }' but required in type '{ [key: number]: boolean; b: number; c?: string | undefined; }'.
//
// 12 a = {20: true};
// ~
//
//     src/index.ts:2:5
// 2     b: number,
//     ~
//         'b' is declared here.
//
//     src/index.ts:13:12 - error TS2322: Type 'string' is not assignable to type 'boolean'.
//
// 13 a = {b: 1, 33: 'red'}
// ~~
//
//     src/index.ts:4:5
// 4     [key: number]: boolean
// ~~~~~~~~~~~~~~~~~~~~~~
//     The expected type comes from this index signature.
//
//
//     Found 2 errors in the same file, starting at: src/index.ts:12