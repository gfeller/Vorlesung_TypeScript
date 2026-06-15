class Bird {
    public fly(): void {
        console.log('I am flying!');
    }
}

class Duck extends Bird {
    public override fly(): void {
        console.log('Duck flying low...');
    }
}

class Penguin extends Bird {
    public override fly(): void {
        throw new Error('Penguins cannot fly!');
    }
}

function makeBirdFly(bird: Bird): void {
    bird.fly();
}

makeBirdFly(new Duck());
makeBirdFly(new Penguin()); 