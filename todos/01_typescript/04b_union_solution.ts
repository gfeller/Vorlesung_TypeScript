import { CircleV4, RectV4, ShapeV4, type1, type2, type3, type4, type Circle, type Point, type Rect, type Shape } from "./04a_union_solution.js"


// V1:
function printShape1(s: { x: number, y: number, r?: number, w?: number, h?: number }) {
  if (s.r !== undefined) {
    console.log(`circle: center=(${s.x}, ${s.y}), radius(${s.r})`)
  } else if (s.w !== undefined && s.h !== undefined) {
    console.log(`rect: topleft(${s.x},${s.y}), size(${s.w},${s.h})`)
  } else {
    console.log(`point: center(${s.x},${s.y})`)
  }
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
  if (isCircle(s)) {
    console.log(`circle: center=(${s.x}, ${s.y}), radius(${s.r})`)
  } else if (isRect(s)) {
    console.log(`rect: topleft(${s.x},${s.y}), size(${s.w},${s.h})`)
  } else {
    console.log(`point: center(${s.x},${s.y})`)
  }
}
type2.forEach(printShape2)


function printShape3(s: Shape) {
  switch (s.kind) {
    case 'point': return console.log(`point: center(${s.x},${s.y})`)
    case 'circle': return console.log(`circle: center=(${s.x}, ${s.y}), radius(${s.r})`)
    case 'rect': return console.log(`rect: topleft(${s.x},${s.y}), size(${s.w},${s.h})`)
  }
}

type3.forEach(printShape3)


function printShape4(s: ShapeV4) {
  if (s instanceof CircleV4) {
    console.log(`circle: center=(${s.x}, ${s.y}), radius(${s.r})`)
  } else if (s instanceof RectV4) {
    console.log(`rect: topleft(${s.x},${s.y}), size(${s.w},${s.h})`)
  } else {
    console.log(`point: center(${s.x},${s.y})`)
  }
}

type4.forEach(printShape4)