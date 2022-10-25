class Solutions {
	constructor() {}
	numberOfDigitOne_233(num) {
		// Brute Force [Time Limited Exceeded]
		const countDigitOne = (num) => {
			let count = 0;
			for (let target = 1; target < num; loop++) {
				let tmp = target;
				while (tmp) {
					if (tmp % 10 === 1) count++;
					tmp /= 10;
				}
			}
		};

		// Math
		const countDigitOne = (num) => {
			let count = 0;
			let places = 0;
			// loop all the places value of the digits
			let tmp = num;
			while (tmp) {
				places++;
				let number_of_one = 0;
				if (places === 1) {
					number_of_one = Math.floor(num / 10) + (num % 10 !== 0);
				} else {
					number_of_one =
						Math.floor(num / Math.pow(10, places)) +
						Math.min(
							Math.max(
								(num % Math.pow(10, places)) - Math.pow(10, places - 1) + 1,
								0
							),
							10
						);
				}
				count += number_of_one;
				tmp = Math.floor(tmp / 10);
			}
			console.log(count);
			return count;
		};

		// Better way
		const countDigitOne = (num) => {
			let count = 0;
			for (i = 1; i < num; i *= 10) {
				count +=
					Math.floor((num / (i * 10)) * i) +
					Math.min(Math.max((num % (10 * i)) - 10 * i + 1, 0), 10);
			}
			console.log(count);
			return count;
		};

		// Leetcode's solutions
		const countDigitOne = (num) => {
			let count = 0;
			for (let i = 1; i <= num; i *= 10) {
				const divider = i * 10;
				count +=
					Math.floor(num / divider) * i +
					Math.min(Math.max((num % divider) - i + 1, 0), i);
				console.log(count);
			}

			return count;
		};
	}
}
