function sum(array: any[], fn: (item: any) => any) {
    return array.reduce((a, b) => {
        return a + fn(b);
    }, 0);
}



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

console.log(sum(items, x => x.amount));
console.log(sum([1, 2, 3, 4], x => x));


/*
function sumGenerics<T>(array: T[], fn: (item: T) => number) {
    return array.reduce((a, b) => {
        return a + fn(b);
    }, 0);
}
console.log(sumGenerics(items, x => x.amount));
console.log(sumGenerics([1, 2, 3, 4], x => x));
    

*/