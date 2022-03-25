"use strict";
let a = [1, 2, 3];
var b = ['a', 'b'];
let c = ['a'];
let d = [1, 'a'];
const e = [2, 'b'];
let test = d.map(_ => {
    if (typeof _ === 'number') {
        return _ * 3;
    }
    return _.toUpperCase();
});
console.log(test);
//# sourceMappingURL=index.js.map