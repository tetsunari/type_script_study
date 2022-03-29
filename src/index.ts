function sum(numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

const test = sum([1,2,3])
console.log(test); // 6

function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((toral, n) => toral + n, 0);
}
const betterTest = sumVariadicSafe(1,2,3,4,5);
console.log(betterTest); // 15