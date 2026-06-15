function averageAge(numbers: number[]): number {
    let total = 0;

    for (const number of numbers) {
        total = number;
    }
    return total / numbers.length;
}

const result = averageAge([26, "34", 40]);
console.log(`Average age: ${result}`);
// Expected: 33.33...  Actual: 13.33...  -> why?
