import {Money} from "./Money";

export class Frank extends Money {

    constructor(amount: number) {
        super(amount, 'CHF');
    }
}
