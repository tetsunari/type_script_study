// 名前付き関数
function greet(name: string) {
    return 'hello' + name;
}

// 関数式
function greet2(name: string) {
    return 'hello' + name;
}

// アロー関数
let greet3 = (name: string) => {
    return 'hello' + name;
}

// アロー関数省略系
let greet4 = (name: string) => 'hello' + name;

greet('World');
greet4('Tetsu');