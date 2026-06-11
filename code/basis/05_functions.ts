// Parameter definieren
function greet(name: string) {
    console.log(`"Hello, ${name.toUpperCase()}`);
}

// Rückgabewert definieren
// Falls nicht definiert -> inferred implicitly ( Automatische Erkennung )
// ESLint: explicit-function-return-type
function getFavoriteNumber(): number {
    return 42;
}

// void: falls kein Return Wert existiert. 
function printFavoriteNumber(): void {
    console.log(42);
}