// Make it work if the firstNumber is larger

const sumAll = function(firstNumber, secondNumber) {
    mySum = 0;
    if (firstNumber < 0 || secondNumber < 0) {
        return 'ERROR';
    } else if (firstNumber > secondNumber) {
        // if firstNumber is bigger, swap the args
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
