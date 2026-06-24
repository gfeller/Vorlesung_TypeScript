// V1
export const type1: { x: number, y: number, r?: number, w?: number, h?: number }[] = [
  { x: 1, y: 2 },
  { x: 1, y: 2, r: 2 },
  { x: 1, y: 2, w: 2, h: 2 }
]

// V2
export interface Point { x: number; y: number }
export interface Circle extends Point { r: number }
export interface Rect extends Point { w: number; h: number }

export const type2: (Point | Circle | Rect)[] = [
  { x: 1, y: 2 },
  { x: 1, y: 2, r: 2 },
  { x: 1, y: 2, w: 2, h: 2 }
]

// V3 ( angepasste daten )

export type Shape =
  | { kind: 'point', x: number, y: number }
  | { kind: 'circle', x: number, y: number, r: number }
  | { kind: 'rect', x: number, y: number, w: number, h: number } // Hinweis: die Einzelnen  Shapes als Interface definieren und ein Union erstellen. 

export const type3: Shape[] = [
  { kind: 'point', x: 1, y: 2 },
  { kind: 'circle', x: 1, y: 2, r: 2 },
  { kind: 'rect', x: 1, y: 2, w: 2, h: 2 }
]


// V4 ( Mit Klassen )

export class ShapeV4 {
  constructor(public x: number, public y: number) { }
}
export class PointV4 extends ShapeV4 {
}
export class CircleV4 extends ShapeV4 {
  constructor(x: number, y: number, public r: number) { super(x, y) }
}
export class RectV4 extends ShapeV4 {
  constructor(x: number, y: number, public w: number, public h: number) { super(x, y) }
}

export const type4: PointV4[] = [
  new PointV4(1, 2),
  new CircleV4(1, 2, 2),
  new RectV4(1, 2, 2, 2)
]
