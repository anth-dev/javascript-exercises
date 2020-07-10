const fibonacci = function(number) {
    if (number < 0) {
        return 'OOPS';
    }
    let firstAddend = 1;
    let secondAddend = 1;
    let sum;
    for (i = 2; i < number; i++) {
        sum = firstAddend + secondAddend;
        firstAddend = secondAddend;
        secondAddend = sum;
    }
    return sum;
}

module.exports = fibonacci
