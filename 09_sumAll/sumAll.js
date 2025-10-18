//Implement a function that takes 2 positive integers and
//returns the sum of every integer between (and including) them:
const sumAll = function (first, second) {
	if (first < 0 || second < 0 || !Number.isInteger(first) || !Number.isInteger(second)) {
		console.log(first, second);
		return "ERROR";
	}

	let start = first;
	let end = second;

	if (first > second) {
		start = second;
		end = first;
	}
	let sum = 0;
	for (let i = start; i <= end; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
