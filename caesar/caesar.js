const caesar = function(string, shift) {
    // array containing alphabet
    let alphabet = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];

    // blank array to build new string
    let encryptedString = [];

    // break string into characters
    let stringArray = [...string];
    
    // get the position of each item in stringArray in alphabet
    for (i = 0; i < stringArray.length; i++) {
        let position = alphabet.indexOf(stringArray[i]);
        // check if position returns -1, if so push item from stringArray to the encypted string
        if (position == -1) {
            encryptedString.push(stringArray[i]);
        } else if (position + shift * 2 > alphabet.length) {
            // make it loop forwards with positive shift
            while (position + shift * 2 > alphabet.length) {
                position = position + shift * 2 - alphabet.length;
            }
            encryptedString.push(alphabet[position]);
        // make it loop backwards with negative shift
        } else if (null) {
            
        } else {
            // check found position against length of alphabet array
            // take found position and add shift to find character to add to encryptedString
            encryptedString.push(alphabet[position + shift * 2]);
            console.log(encryptedString);
        }
    }

    // return encrypted string
    return encryptedString.join('');
}

module.exports = caesar
