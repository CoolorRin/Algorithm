const addDigits_258 = (num) => {
	let sum = 0;
	while (num) {
		sum += num % 10;
		num = Math.floor((num /= 10));
	}
	if (sum <= 9) return sum;
	else return addDigits_258(sum);
};

console.log(addDigits_258(55));
