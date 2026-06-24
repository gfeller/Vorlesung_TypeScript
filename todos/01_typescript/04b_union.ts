import { CircleV4, RectV4, ShapeV4, type1, type2, type3, type4, type Circle, type Point, type Rect, type Shape } from "./04a_union_solution.js"


// V1:
function printShape1(s: { x: number, y: number, r?: number, w?: number, h?: number }) {
  // TODO
}
type1.forEach(printShape1)


// V2:
function isCircle(s: Point | Circle | Rect): s is Circle {
  return 'r' in s
}
function isRect(s: Point | Circle | Rect): s is Rect {
  return 'w' in s && 'h' in s
}

function printShape2(s: Point | Circle | Rect) {
  // TODO
}
type2.forEach(printShape2)


function printShape3(s: Shape) {
  // TODO
}
type3.forEach(printShape3)

function printShape4(s: ShapeV4) {
  // TODO
}

type4.forEach(printShape4)