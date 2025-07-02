const palindromes = function (w) {
	const alphaNum = "abcdefghijklmnopqrstuvwxyz1234567890";
	const wordArr = w.toLowerCase().split("");
	const cleanWordArr = wordArr.filter(letter => alphaNum.split("").includes(letter));

	let reversedCleanWordArr = [];
	cleanWordArr.map(item => reversedCleanWordArr.unshift(item));

	console.log(w);

	console.log(cleanWordArr, reversedCleanWordArr);

	return cleanWordArr.join() === reversedCleanWordArr.join();
};

// Do not edit below this line
module.exports = palindromes;
