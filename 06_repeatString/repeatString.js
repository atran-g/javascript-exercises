const repeatString = function (str, num) {
	if (num < 0) return "ERROR";
	let repeatArr = [];
	for (let i = 0; i < num; i++) {
		repeatArr.push(str);
	}
	return repeatArr.join("");
};

// Do not edit below this line
module.exports = repeatString;
