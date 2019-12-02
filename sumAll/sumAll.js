const sumAll = function(firstNumber, secondNumber) {
    mySum = 0;
    // check to see if both args are numbers, return 'ERROR' if not
    if (typeof(firstNumber) != 'number' || typeof(secondNumber) != 'number') {
        return 'ERROR';
    // check to see if both args are positive, return 'ERROR' if not
    } else if (firstNumber < 0 || secondNumber < 0) {
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
