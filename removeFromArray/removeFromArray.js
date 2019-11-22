// removeFromArray ([1,2,3,4], ...itemsToRemove) should return an
// array with the itemsToRemove removed

const removeFromArray = function(numberArray, ...itemsToRemove) {
    let arrayLocation = numberArray.indexOf(...itemsToRemove);
    numberArray.splice(arrayLocation, 1);
    return numberArray;
}

module.exports = removeFromArray
