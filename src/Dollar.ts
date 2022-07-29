import {Money} from "./Money";

export class Dollar extends Money {

    constructor(amount: number) {
        super(amount, 'USD');
    }
}
