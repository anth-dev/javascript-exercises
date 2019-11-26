// removeFromArray ([1,2,3,4], ...itemsToRemove) should return an
// array with the itemsToRemove removed

// the code below only works with one item to remove

// const removeFromArray = function(numberArray, ...itemsToRemove) {
//     let arrayLocation = numberArray.indexOf(...itemsToRemove);
//     numberArray.splice(arrayLocation, 1);
//     return numberArray;
// }

// the code below is not working

// const removeFromArray = function(numberArray, ...itemsToRemove) {
//     let numberToRemove = [];
//     let returnArray = [];
//     for (i = itemsToRemove.length; i === 0; i--) {
//         numberToRemove = [];
//         console.log(itemsToRemove);
//         numberToRemove.push(itemsToRemove.shift());
//         let arrayLocation = numberArray.indexOf(numberToRemove);
//         returnArray.push(numberArray.splice(arrayLocation, 1));
//     }
//     return returnArray;
// }


// something about the for loop isn't working
// the console.log() never happens

// const removeFromArray = function(numberArray, ...itemsToRemove) {
//     let numberToRemove = [];
//     let returnArray = [];
//     console.log('There are ' + itemsToRemove.length + 
//             ' items to remove.');
//     for (i = itemsToRemove.length; i < 1; i--) {
//         console.log(itemsToRemove[i - 1])
//         numberToRemove = itemsToRemove[i - 1];
//         console.log('Removing ' + numberToRemove + '.');
//         returnArray.push(numberArray.filter(itemsToRemove[i - 1]));
//     }
//     return returnArray;
// }

const removeFromArray = function(numberArray, ...itemsToRemove) {
    let returnArray = numberArray.filter(
        function(i) {
            return this.indexOf(i) < 0;
        },
        itemsToRemove
    );
    return returnArray;
}

module.exports = removeFromArray
