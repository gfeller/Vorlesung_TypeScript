type Point = {
    x: number;
    y: number;
};

type Line = {
    start: Point;
    end: Point;
}

type UUID = `${string}-${string}-${string}-${string}-${string}`;

type ID = number | UUID

function addLine(uuid: ID, line: Line) {
    // ...
}

addLine("019e923e-ff1e-7a84-ab8c-647ef9693879", { start: { x: 1, y: 1 }, end: { x: 1, y: 1 } })
