import * as assert from "assert";
 import {Dollar} from "../src/Dollar";
describe('Money test', () => {
        it('test multiplication', function () {
            let five : Dollar = new Dollar(5);
            five.times(2)
            assert.equal(10, five.amount);
        });
    }
)
