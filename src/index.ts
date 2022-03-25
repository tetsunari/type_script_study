enum Language {
    English,
    Spanish,
    Japanese
}

let myFirstLanguage = Language.Japanese;
let mySecondLanguage = Language.English;

console.log(myFirstLanguage); // 2
console.log(mySecondLanguage); // 0

enum Languages {
    English = 100,
    Spanish = 200 + 300,
    Japanese
}
console.log(Languages.Japanese); // 501