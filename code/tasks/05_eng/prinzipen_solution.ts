// ------------
interface User {
    name: string;
    age: number;
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


function getProductProperty<T extends keyof Product>(
    product: Product,
    property: T,
): Product[T] {
    return product[property];
}

// ------------

function getEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(number => number % 2 === 0);
}

