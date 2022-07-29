import * as assert from "assert";
import { expect } from 'chai';

import {MoneyFactory} from "../src/MoneyFactory";
import {Money} from "../src/Money";

describe('Money test', () => {
    it('test multiplication', function () {
        let five : Money =  MoneyFactory.dollar(5);
        let product = five.times(2);
        assert.equal(10, product.amount);

        product = five.times(3)
        assert.equal(15, product.amount);
    });
    it('test frank multiplication', function () {
        let five : Money = MoneyFactory.frank(5);
        let product = five.times(2);
        assert.equal(10, product.amount);

        product = five.times(3)
        assert.equal(15, product.amount);
    });

    it('test equality of same currency', () => {
       expect(MoneyFactory.dollar(5).equals(MoneyFactory.dollar(5))).to.be.true;
       expect(MoneyFactory.dollar(5).equals(MoneyFactory.dollar(6))).to.be.false;
    })

    it('test equality of different currency', () => {
        expect(MoneyFactory.dollar(5).equals(MoneyFactory.frank(5))).to.be.false;
    })

    it('test object currency', () => {
        expect(MoneyFactory.dollar(5).currency).to.be.equal('USD');
        expect(MoneyFactory.frank(5).currency).to.be.equal('CHF');
    })
    }
)
