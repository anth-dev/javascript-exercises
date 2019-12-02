const sumAll = function(firstNumber, secondNumber) {
    mySum = 0;
    if (typeof(firstNumber) != 'number' || typeof(secondNumber) != 'number') {
        return 'ERROR';
    } else if (firstNumber < 0 || secondNumber < 0) {
        return 'ERROR';
    } else if (firstNumber > secondNumber) {
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
