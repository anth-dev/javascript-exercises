const palindromes = function(string) {
    // make lowercase
    let lowercaseString = string.toLowerCase();
    // remove punctuation and whitespace
    let regex = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let cleanString = lowercaseString.replace(regex, '');
    // split the string into an array
    let charArray = cleanString.split("");
    // reverse the array order and output as a string
    let duplicateArray = [...charArray]
    let reversedArray = duplicateArray.reverse();
    // compare generated string with original string
    // and output true or false
    for (let i = 0; i < charArray.length; i++) {
        if (charArray[i] != reversedArray[i]) {
            return false;
        }
    }
    return true;
}

module.exports = palindromes
