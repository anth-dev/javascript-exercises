const reverseString = function(inputString) {
    let characterArray = inputString.split('');
    let reversedArray = characterArray.reverse();
    let newString = reversedArray.join('');
    return newString;
}

module.exports = reverseString
