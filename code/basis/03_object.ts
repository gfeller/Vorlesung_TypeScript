// Objekte können definiert werden
const pt: { x: number; y: number } = { x: 1, y: 2 }

// Objekte mit optionalen Properties (?)
const circle: { radius?: number; x: number, y: number } = { x: 1, y: 2 }
circle.radius = 10;

// Automatische erkennung vom Type
let rect = { width: 20, height: 20 }
let square = { width: 20 };

rect = square; // error
square = rect; // works