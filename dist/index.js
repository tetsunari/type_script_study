"use strict";
// 名前付き関数
function greet(name) {
    return 'hello' + name;
}
// 関数式
function greet2(name) {
    return 'hello' + name;
}
// アロー関数
let greet3 = (name) => {
    return 'hello' + name;
};
// アロー関数省略系
let greet4 = (name) => 'hello' + name;
greet('World');
greet4('Tetsu');
//# sourceMappingURL=index.js.map