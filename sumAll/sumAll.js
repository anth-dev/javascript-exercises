const sumAll = function(firstNumber, secondNumber) {
    mySum = 0;
    for (i = secondNumber; i < firstNumber; i--) {
        console.log('i = ' + i);
        mySum += i;
    }
    return mySum;
}

module.exports = sumAll
