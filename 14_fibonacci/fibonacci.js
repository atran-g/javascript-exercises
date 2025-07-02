const fibonacci = function (n) {
	const intN = +n;
	let arr = [1, 1];

	if (intN === 0) return 0;
	if (intN < 0) return "OOPS";

	for (let i = 0; i < intN - 2; i++) {
		arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	}

	return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;

/**
 * [1, 1, 2, 3, 5]
 * start with 1
 * next number is always 1
 * add 1 and 1
 * push 2 to array
 * add arr[arr.length-1] and arr[arr.length -2]
 * push result
 * do this n number of times
 */
