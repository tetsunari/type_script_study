interface Reserve {
    (from: Date, to: Date, destination: string): string;
    (from: Date, destination: string): string;
}

let reserve: Reserve = (
    from: Date,
    toOrDestination: Date|string,
    destination?: string
) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        return 'go';
    } else if (typeof toOrDestination === 'string') {
        return 'back';
    }
    return 'no reservation';
}

let now = new Date(2022, 4, 8);
let tomorrow = new Date(2022, 4, 9);
// console.log(now);
// console.log(tomorrow);
console.log(reserve(now, tomorrow, 'japan')); // go
console.log(reserve(now, 'japan')); // back
