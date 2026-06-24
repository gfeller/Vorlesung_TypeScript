// data

const items = [
    { "name": "Apple", "amount": 3, "price": 0.5, "category": "fruit" },
    { "name": "Banana", "amount": 5, "price": 0.3, "category": "fruit" },
    { "name": "Bread", "amount": 2, "price": 2.0, "category": "grain" },
    { "name": "Rice", "amount": 1, "price": 3.5, "category": "grain" },
    { "name": "Milk", "amount": 1, "price": 1.5, "category": "dairy" },
    { "name": "Cheese", "amount": 2, "price": 4.0, "category": "dairy" },
    { "name": "Carrot", "amount": 4, "price": 0.4, "category": "vegetable" },
    { "name": "Broccoli", "amount": 2, "price": 1.8, "category": "vegetable" }
]



// task 1:
function swap<A, B>(pair: [A, B]): [B, A] {
    return [pair[1], pair[0]]
}

console.log(swap([1, "b"]))
console.log(swap([true, []]))

// task 2:
function avg<T>(array: T[], fn: (item: T) => number): number {
    return array.reduce((a, b) => {
        return a + fn(b);
    }, 0) / array.length;
}

console.log(avg(items, x => x.amount))

// task 2 - Bonus:
type NumericKeys<T> = {
    [K in keyof T]: T[K] extends number ? K : never
}[keyof T];

function avgWithKey<T>(array: T[], key: NumericKeys<T>): number {
    return array.reduce((acc, item) => {
        return acc + (item[key] as number);
    }, 0) / array.length;
}

console.log(avgWithKey(items, "amount"))

// task 3 - filter:
function filterByProperty<T, K extends keyof T>(array: T[], key: K, value: T[K]): any {
    return array.filter(item => item[key] === value);
}

console.log(filterByProperty(items, "amount", 3))
