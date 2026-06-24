// FIX: Single Responsibility Principle (SRP)
// Person had two responsibilities: person data/behaviour AND email validation.
// Email is now a Value Object that owns its own validation.
// Person simply receives a valid Email object — no validation logic, no DIP issue.

class Email {
    public readonly value: string;

    constructor(email: string) {
        const re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            throw new Error('Invalid email!');
        }
        this.value = email;
    }
}

class Person {
    public name: string;
    public surname: string;
    public email: Email;

    constructor(name: string, surname: string, email: Email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    public greet(): void {
        console.log(`Hi! I'm ${this.name}. You can reach me at ${this.email.value}`);
    }
}

const person = new Person('John', 'Doe', new Email('john@example.com'));
