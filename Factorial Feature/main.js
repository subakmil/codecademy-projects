const Calculate = {
    factorial(inputNumber) {

        if (typeof inputNumber !== "number") {
            return "Error: Please insert a number!";
        }

        let factorialResult = 1;
        for(let i = inputNumber; i > 1; i--) {
            factorialResult *= i;
        }
        return factorialResult;
    }
}

module.exports = Calculate;