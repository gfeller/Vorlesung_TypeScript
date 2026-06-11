// Array type wird automatisch erkannt
const a1 = [1, 2, 3]; // number[]
const a2 = [1, "2", 3]; // (number | string)[]

a1.push(2, "3"); // error
a2.push(2, "3"); // works

// Array Type fix definieren
const a3: number[] = [1, 2, 3]; // number[]
const a4: Array<number> = new Array<number>(1, 2, 3); // number[]

