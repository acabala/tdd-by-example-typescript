import * as assert from "assert";
import { expect } from 'chai';

 import {Dollar} from "../src/Dollar";
 import {Frank} from "../src/Frank";

describe('Money test', () => {
    it('test multiplication', function () {
        let five : Dollar = new Dollar(5);
        let product = five.times(2);
        assert.equal(10, product.amount);

        product = five.times(3)
        assert.equal(15, product.amount);
    });
    it('test frank multiplication', function () {
        let five : Frank = new Frank(5);
        let product = five.times(2);
        assert.equal(10, product.amount);

        product = five.times(3)
        assert.equal(15, product.amount);
    });

    it('test equality of same currency', () => {
       expect(new Dollar(5).equals(new Dollar(5))).to.be.true;
       expect(new Dollar(5).equals(new Dollar(6))).to.be.false;
    })

    it('test equality of different currency', () => {
        expect(new Dollar(5).equals(new Frank(5))).to.be.false;
    })
    }
)
