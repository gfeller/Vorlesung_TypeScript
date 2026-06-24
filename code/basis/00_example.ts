function log(text: string){
    console.log(text);
}

class A{
    protected test = 10;
}

class B extends A{
    public override test = 10;
}

const a = new A()
a.test = 10; // Compile Fehler

const b = new B()
b.test = 10; // OK




