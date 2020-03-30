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
	for (let i = 0; i < array.length; i++) {
		console.log('iterating over item ' + i )
		product = product * array[i];
	}
	return product;
}

function power(number, exponent) {
	let product = 1;
	for (let i = 0; i < exponent; i++) {
		product = product * number;
	}
	return product;
}

function factorial(number) {
	if (number == 0) {
		return 1;
	}
	let numberSentence = '';
	for (let i = number; i > 0; i--) {
		if (i == 1) {
			numberSentence += `${i}`;
			return eval(numberSentence);
		}
		numberSentence += `${i} * `;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}