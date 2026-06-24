// FIX: Open/Closed Principle (OCP)
// DiscountCalculator.calculate needed modification every time a new discount type
// was added. Now each discount is its own class; adding a new type means adding
// a new class, not editing existing code.

interface Discount {
    apply(price: number): number;
}

class StudentDiscount implements Discount {
    apply(price: number): number {
        return price * 0.8;
    }
}

class SeniorDiscount implements Discount {
    apply(price: number): number {
        return price * 0.75;
    }
}

class EmployeeDiscount implements Discount {
    apply(price: number): number {
        return price * 0.6;
    }
}

class DiscountCalculator {
    public calculate(price: number, discount: Discount): number {
        return discount.apply(price);
    }
}

const calc = new DiscountCalculator();
console.log(calc.calculate(100, new StudentDiscount()));
