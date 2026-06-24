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

// task 1: swap 
function swap(pair: any): any {
    return [pair[1], pair[0]]
}

console.log(swap([1, "b"]))
console.log(swap([true, []]))

// task 2: avg
function avg(array: any[], fn: (item: any) => any): any {
    return array.reduce((a, b) => {
        return a + fn(b);
    }, 0) / array.length;
}

// task 2 - bonus:
function avgWithKey(array: any[], key: any): any {
    return array.reduce((a, b) => {
        return a + b[key];
    }, 0) / array.length;
}


// task 3 - filter:
function filterByProperty(array: any[], key: any, value: any): any {
    return array.filter(item => item[key] === value);
}

console.log(avg(items, x => x.amount))
console.log(avgWithKey(items, "amount"))
console.log(filterByProperty(items, "amount", 3))