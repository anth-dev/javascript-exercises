const caesar = function(string, shift) {
    // array containing alphabet
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    // blank array to build new string
    let encryptedString = [];

    // break string into characters
    let stringArray = [...string];
    
    // get the position of each item in stringArray in alphabet
    for (i = 0; i <= stringArray.length; i++) {
        let position = alphabet.indexOf(stringArray[i]);
        return position;
        // take found position and add shift to find character to add to encryptedString
    }

    // use alphabet array to find shifted characters and reapply case

    // return encrypted string

}

module.exports = caesar
