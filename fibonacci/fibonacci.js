const fibonacci = function(number) {
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
