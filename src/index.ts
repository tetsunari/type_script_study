type A = readonly string[]; // readonly string[]
type B = ReadonlyArray<string> // readonly string[]
type C = Readonly<string> // readonly string[]

type D = readonly [number, string] // readonly [number, string]
type E = Readonly<[number, string]> // readonly [number, string]

let a: A = ['test', 'aa'];
let test = a.concat('aaa');
console.log(test);
let b: B = ['test', 'aa'];
let d: D = [1, 'd'];

// 上記は全て正常動作