// any -> alles ist erlaubt. Sollte vermieden werden 
let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";

// any kann jedem anderen Wert zugewissen werden
const n: number = obj

