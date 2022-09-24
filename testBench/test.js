const isAnagram = (s, t) => {
	const charArr = new Array(26);
	charArr.fill(0);
	for (const char of [...s]) {
		charArr[char.charCodeAt() - 97]++;
	}

	for (const char of [...t]) {
		charArr[char.charCodeAt() - 97]--;
		if (!charArr[char.charCodeAt()]) return false;
	}
	return true;
};

const testPattern = ["a", "ab"];

console.log(isAnagram(...testPattern));
