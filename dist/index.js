"use strict";
let as = [1, 2, 3];
let bs = as.concat(4);
let cs = as.slice(1, 2);
let three = bs[2];
console.log(as); // [ 1, 2, 3 ]
console.log(bs); // [ 1, 2, 3, 4 ]
console.log(cs); // [ 2 ]
console.log(three); // 3
as[4] = 5;
as.push(6);
//# sourceMappingURL=index.js.map