"use strict";
var Language;
(function (Language) {
    Language[Language["English"] = 1] = "English";
    Language[Language["Spanish"] = 2] = "Spanish";
    Language[Language["Japanese"] = 3] = "Japanese";
})(Language || (Language = {}));
let good = Language[1];
let error = Language[4];
console.log(good);
console.log(error);
//# sourceMappingURL=index.js.map