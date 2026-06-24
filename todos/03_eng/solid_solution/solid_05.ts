// FIX: Liskov Substitution Principle (LSP)
// Penguin extended Bird but threw an error on fly(), so it could not be substituted
// for Bird without breaking the program. The fix separates flying birds from
// non-flying birds so every subtype honours the contract of its parent.

class Bird {
    public toString(): string {
        return this.constructor.name;
    }
}

class FlyingBird extends Bird {
    public fly(): void {
        console.log(`${this} is flying!`);
    }
}

class Duck extends FlyingBird {
    public override fly(): void {
        console.log('Duck flying low...');
    }
}

class Penguin extends Bird {
    public swim(): void {
        console.log('Penguin swimming...');
    }
}

function makeFlyingBirdFly(bird: FlyingBird): void {
    bird.fly();
}

makeFlyingBirdFly(new Duck());
// makeFlyingBirdFly(new Penguin()); // compile-time error — Penguin is not a FlyingBird
new Penguin().swim();
