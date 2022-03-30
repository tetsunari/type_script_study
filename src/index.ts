function fancyDate() {
    return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`
}

const test = fancyDate.call(new Date());
console.log(test);

// const test2 = fancyDate();
// console.log(test2);

// 下記のほうが良い
function fancyDate1(this: Date) {
    return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`
}

const test3 = fancyDate1.call(new Date());
console.log(test3);

// const test4 = fancyDate1();
// console.log(test4); // error