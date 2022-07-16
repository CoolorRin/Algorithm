class solutions {
	constructor() {}

	findPaths_576(m, n, maxMove, startRow, startColumn) {
		const modValue = 1000000007;
		const dp = Array.from({ length: maxMove + 1 }, () =>
			Array.from({ length: m + 2 }, () => Array.from({ length: n + 2 }))
		);
		// Init Grid  Array;
		dp.forEach((rowArray) => {
			for (const index in rowArray) {
				if (index === "0" || index === `${rowArray.length - 1}`) {
					rowArray[index] = rowArray[index].map((el, index, array) => {
						console.log(array);
						if (index === 0 || index === array.length - 1) {
							return 0;
						} else {
							return 1;
						}
					});
				} else {
					rowArray[index] = rowArray[index].map((el, index, array) => {
						if (index === 0 || index === array.length - 1) {
							return 1;
						} else return 0;
					});
				}
			}
		});
		console.log(dp);

		// Top down recursive. BFS. For understand
		// function getPath(maxMove, row, col) {
		// 	if (row === 0 || row === m + 1 || col === 0 || col === n + 1) {
		// 		return 1;
		// 	}
		// 	if (maxMove >= 1) {
		// 		return (
		// 			getPath(maxMove - 1, row - 1, col) +
		// 			getPath(maxMove - 1, row + 1, col) +
		// 			getPath(maxMove - 1, row, col - 1) +
		// 			getPath(maxMove - 1, row, col + 1)
		// 		);
		// 	} else return 0;
		// }
		// return getPath(maxMove, startRow + 1, startColumn + 1);

		// Dp
		for (let step = 1; step <= maxMove; step++) {
			for (let row = 1; row <= m; row++) {
				for (let col = 1; col <= n; col++) {
					let up;
					let bottom;
					let left;
					let right;
					if (step > 1) {
						up = dp[step - 1][row + 1][col];
						bottom = dp[step - 1][row - 1][col];
						left = dp[step - 1][row][col - 1];
						right = dp[step - 1][row][col + 1];
					} else {
						up = row + 1 > m ? 1 : dp[step - 1][row + 1][col];
						bottom = row - 1 === 0 ? 1 : dp[step - 1][row - 1][col];
						left = col - 1 === 0 ? 1 : dp[step - 1][row][col - 1];
						right = col + 1 > n ? 1 : dp[step - 1][row][col + 1];
					}
					dp[step][row][col] = (up + bottom + left + right) % modValue;
				}
			}
		}
		console.log(dp);
		return dp[maxMove][startRow + 1][startColumn + 1];
	}
}

const test = new solutions();
console.log(test.findPaths_576(3, 3, 1, 1, 1));
