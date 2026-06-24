import { calc, type Operator } from './11_calc.js'

const op: Operator = '+'

console.log(calc(10, 5, op))
console.log(calc(10, 5, '-'))
console.log(calc(10, 5, '*'))
console.log(calc(10, 5, '/'))