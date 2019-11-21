// removeFromArray ([1,2,3,4], ...itemsToRemove) should return an
// array with the itemsToRemove removed

const removeFromArray = function(numberArray, ...itemsToRemove) {
    let toRemove = Array.from(itemsToRemove);
    return toRemove;
}

module.exports = removeFromArray
