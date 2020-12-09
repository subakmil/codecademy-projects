const assert = require("assert");
const Calculate = require("../main.js");

describe("Calculate", () => {
    describe(".factorial", () => {
       it("returns correct value of 5!", () => {
        //setup
        const inputNumber = 5;
        const expected = 120;
        //exercise
        const result = Calculate.factorial(inputNumber);
        //verify
        assert.ok(result == expected);
       });
       it("returns correct value of 3!", () => {
        //setup
        const inputNumber = 3;
        const expected = 6;
        //exercise
        const result = Calculate.factorial(inputNumber);
        //verify
        assert.ok(result == expected);
       });
       it("returns correct value of 0!", () => {
        //setup
        const inputNumber = 0;
        const expected = 1;
        //exercise
        const result = Calculate.factorial(inputNumber);
        //verify
        assert.ok(result == expected);
       });
       it("returns error message when entered incorrect data type", () => {
        //setup
        const inputNumber = "string";
        const expected = "Error: Please insert a number!";
        //exercise
        const result = Calculate.factorial(inputNumber);
        //verify
        assert.ok(result == expected);
       });
    });
});