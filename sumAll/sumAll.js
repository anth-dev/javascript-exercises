// Make it work if the firstNumber is larger

const sumAll = function(firstNumber, secondNumber) {
    mySum = 0;
    if (firstNumber > secondNumber) {
        for (i = firstNumber; i >= secondNumber; i--) {
            mySum += i;
        }
    }
    for (i = secondNumber; i >= firstNumber; i--) {
        mySum += i;
    }
    return mySum;
}

module.exports = sumAll
