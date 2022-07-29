export class Dollar {

    #amount: number;

    public constructor(amount: number) {
        this.#amount = amount;
    }

    public get amount(): number {
        return this.#amount;
    }

    public times(multiplier: number): Dollar {
        return new Dollar(this.amount * multiplier);
    }

    public equals(other: Dollar): boolean {
        return this.amount === other.amount
    }
}
