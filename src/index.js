function fancyDate() {
    return "".concat(this.getMonth() + 1, "/").concat(this.getDate(), "/").concat(this.getFullYear());
}
var test = fancyDate.call(new Date());
console.log(test);
// const test2 = fancyDate();
// console.log(test2);
// 下記のほうが良い
function fancyDate1() {
    return "".concat(this.getMonth() + 1, "/").concat(this.getDate(), "/").concat(this.getFullYear());
}
var test3 = fancyDate1.call(new Date());
console.log(test3);
// const test4 = fancyDate1();
// console.log(test4); // error
