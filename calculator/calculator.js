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

function multiply () {
	
}

function power() {
	
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