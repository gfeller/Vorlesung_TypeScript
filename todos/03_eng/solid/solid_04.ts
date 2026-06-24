type DiscountType = 'student' | 'senior' | 'employee' | 'employee';

class DiscountCalculator {
    public calculate(price: number, discountType: DiscountType): number {
        if (discountType === 'student') {
            return price * 0.8;
        } else if (discountType === 'senior') {
            return price * 0.75;
        } else if (discountType === 'employee') {
            return price * 0.6;
        }
        return price;
    }
}

const calc = new DiscountCalculator();
console.log(calc.calculate(100, 'student'));
