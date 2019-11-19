const reverseString = function(inputString) {
    let characterArray = inputString.split('');
    let iterations = characterArray.length;
    let newString;
    while (true) {
        if (iterations < 0) {
            return newString;
            break;
        }
        newString += characterArray[iterations - 1];
        iterations--;
    }

}

module.exports = reverseString
