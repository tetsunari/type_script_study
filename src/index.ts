<<<<<<< HEAD
interface Reserve {
    (from: Date, to: Date, destination: string): string;
    (from: Date, destination: string): string;
=======
let Message: string;

interface Cat {
    age: number;
    weight: number;
>>>>>>> a9fdd3009d1f4e42d9e90393c10fcbef2062002b
}

const myCat: Cat = {
    age: 3,
    weight: 5.2,
}

Message = "うちの猫は" + myCat.age + '歳で、体重は' + myCat.weight + 'kgです';
console.log(Message);