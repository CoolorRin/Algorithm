const summaryRanges = (nums) => {
	const resultArr = new Array();
	let startNum = nums[0];
	let endNum = nums[0];
	for (let index = 1; index <= nums.length; index++) {
		if (nums[index] != endNum + 1) {
			if (startNum === endNum) {
				resultArr.push(startNum.toString());
			} else {
				resultArr.push(`${startNum}->${endNum}`);
			}
			startNum = nums[index];
			endNum = nums[index];
		} else {
			endNum = nums[index];
		}
	}
	return resultArr;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
