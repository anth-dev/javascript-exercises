const repeatString = function(theString, timesToRepeat) {
    let myString = '';
    if (timesToRepeat < 0) {
        return 'ERROR';
    }
    for (i = 0; i <= timesToRepeat; i++) {
        if (i === timesToRepeat) {
            return myString;
        }
        myString += theString;
    }
}

module.exports = repeatString
