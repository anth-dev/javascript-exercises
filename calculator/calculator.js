function add (addend1, addend2) {
	return addend1 + addend2;
}

function subtract (minuend, subtrahend) {
	return minuend - subtrahend;
}

function sum (array) {
	let sum = 0;
	array.forEach(number => {
		sum += number;
	});
	return sum;
}

function multiply (array) {
	let product = 1;
	for (i = 0; i < array.length; i++) {
		console.log('iterating over item ' + i )
		product = product * array[i];
	}
	return product;
}

function power(number, exponent) {
	let product = 1;
	for (i = 0; i < exponent; i++) {
		product = product * number;
	}
	return product;
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}