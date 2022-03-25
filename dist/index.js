"use strict";
var Language;
(function (Language) {
    Language[Language["English"] = 0] = "English";
    Language[Language["Spanish"] = 1] = "Spanish";
    Language[Language["Japanese"] = 2] = "Japanese";
})(Language || (Language = {}));
let myFirstLanguage = Language.Japanese;
let mySecondLanguage = Language.English;
console.log(myFirstLanguage); // 2
console.log(mySecondLanguage); // 0
var Languages;
(function (Languages) {
    Languages[Languages["English"] = 100] = "English";
    Languages[Languages["Spanish"] = 500] = "Spanish";
    Languages[Languages["Japanese"] = 501] = "Japanese";
})(Languages || (Languages = {}));
console.log(Languages.Japanese);
//# sourceMappingURL=index.js.map