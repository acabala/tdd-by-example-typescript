import {Money} from "./Money";

export class MoneyFactory {
    public static dollar(amount: number): Money {
        return new Money(amount, 'USD')
    }

    public static frank(amount: number): Money {
        return new Money(amount, 'CHF');
    }
}
