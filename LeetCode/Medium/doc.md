# Medium questions

- [Medium questions](#medium-questions)
  - [Dynamic Programming](#dynamic-programming)
    - [(576)Out of Boundary paths](#576out-of-boundary-paths)

## Dynamic Programming

### [(576)Out of Boundary paths](https://leetcode.com/problems/out-of-boundary-paths/)
> There is an `m x n` grid with a ball. The ball is initially at the position `[startRow, startColumn]`. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply **at most** maxMove moves to the ball.  
> Given the five integers `m`, `n`, `maxMove`, `startRow`, `startColumn`, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo `10^9 + 7`.

**Example:**
```
Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
Output: 6

Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
Output: 12
```

**Constraints:**
- `1 <= m, n <= 50`
- `0 <= maxMove <= 50`
- `0 <= startRow < m`
- `0 <= startColumn < n`

#### **Solutions:**
Use Dp and 3 dimensional array to memory each maxMove's path from out of Boundary to the target point.  
The `BFS` solution in the code is for easily understand the dp solutions.  
The initially for the dynamic memory array is the path of each maxMove's from out of boundary to the target two dimensional point. No matter the maxStep was, the point which in the boundary in the `m` x `n` grid always have `different path` to the out of boundary. except the `0` maxStep.  
**Check the code.**
```javascript
// m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
const dp = [     
  [   // first layer for the maxMove = 0
    [   //  row array
      [0, 0, 0, 0, 0],   // row 0 => out of boundary
      [0, 0, 0, 0, 0],   
      [0, 0, 0, 0, 0],   // row 3 => out of boundary
    ],
  ],  
  [   // first layer for the maxMove = 1;
    [  
      [X, 1, 1, 1, X],    
      [1, 0, 0, 0, 1],    //    
      [X, 1, 1, 1, X],   
    ],
  ], 
  [...],    // same as the second layer init value.
  ...   // same as the second layer init value.
]



Path[row][col]\(maxMove\) = 
  (maxMove - 1)Path[row - 1][col] + 
  (maxMove - 1)Path[row + 1][col] + 
  (maxMove - 1)Path[row][col + 1] + 
  (maxMove - 1)Path[row][col - 1] +
```

#### Code 
- **JavaScript**
  ```JavaScript
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
  ```