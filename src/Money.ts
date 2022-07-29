export class Money {

    protected _amount: number;

    public constructor(amount: number) {
        this._amount = amount;
    }

    public get amount(): number {
        return this.amount;
    }
}
