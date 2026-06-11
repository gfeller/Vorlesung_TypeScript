// ------------
interface User {
    name: string;
    age: number;
    address?: string;
    phoneNumber?: string;
}

function createUser(name: string, age: number): User {
    return { name, age };
}

// ------------

interface Product {
    id: number;
    name: string;
    price: number;
}

function getProductName(product: Product): string {
    return product.name;
}

function getProductPrice(product: Product): number {
    return product.price;
}

// ------------

function getEvenNumbers(numbers: number[]): number[] {
    let evenNumbers: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]! % 2 === 0) {
            evenNumbers.push(numbers[i]!);
        }
    }

    return evenNumbers;
}


