const add = function (l, r) {
	return l + r;
};

const subtract = function (l, r) {
	return l - r;
};

const sum = function (arr) {
	return arr.reduce((total, currentItem) => {
		return total + currentItem;
	}, 0);
};

const multiply = function (arr) {
	return arr.reduce((total, currentItem) => {
		return total * currentItem;
	}, 1);
};

const power = function (l, r) {
	return l ** r;
};

const factorial = function (num) {
	let fact = 1;
	for (let i = num; i > 0; i--) {
		fact *= i;
	}
	return fact;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
