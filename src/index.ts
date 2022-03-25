enum Language {
    English = 1,
    Spanish = 2,
    Japanese = 3
}

let good = Language[1];
let error = Language[4];

console.log(good); // English
console.log(error); // undefined