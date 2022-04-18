let Message: string;

interface Cat {
    age: number;
    weight: number;
}

const myCat: Cat = {
    age: 3,
    weight: 5.2,
}

Message = "うちの猫は" + myCat.age + '歳で、体重は' + myCat.weight + 'kgです';
console.log(Message);