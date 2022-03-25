"use strict";
let a = [1, 2, 3];
var b = ['a', 'b'];
let c = ['a'];
let d = [1, 'a'];
const e = [2, 'b'];
function buildArray() {
    let g = []; // any[]
    g.push(1); // number[]
    g.push('x'); // (string | number)[]
    return g;
}
let myArray = buildArray();
console.log(typeof myArray);
myArray.push(true);
//# sourceMappingURL=index.js.map