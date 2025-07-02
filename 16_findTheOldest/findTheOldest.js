const findTheOldest = function (peopleArr) {
	let oldestIndex = 0;
	peopleArr.map((person, index) => {
		const today = new Date().getFullYear();
		if (
			(person.yearOfDeath || today) - person.yearOfBirth >
			(peopleArr[oldestIndex].yearOfDeath || today) - peopleArr[oldestIndex].yearOfBirth
		) {
			oldestIndex = index;
		}
	});
	return peopleArr[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
