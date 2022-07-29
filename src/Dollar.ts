export class Dollar {

    public constructor(public amount: number) {
    }

    public times(multiplier: number): Dollar {
        return new Dollar(this.amount * multiplier);
    }

    public equals(other: Dollar): boolean {
        return this.amount === other.amount
    }
}
