export class Money {

    protected _amount: number;
    protected _currency: string;

    public constructor(amount: number, currency: string) {
        this._amount = amount;
        this._currency = currency;
    }

    public get amount(): number {
        return this._amount;
    }

    public get currency(): string {
        return this._currency;
    }

    public plus(added: Money): Money {
        return new Money(this.amount + added.amount, this._currency);
    }

    public times(multiplier: number): Money {
        return new Money(this.amount * multiplier, this._currency);
    }

    public equals(other: Money): boolean {
        return this.amount === other.amount && this.currency === other.currency
    }
}
