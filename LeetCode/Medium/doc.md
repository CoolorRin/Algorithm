# Medium questions

- [Medium questions](#medium-questions)
  - [Dynamic Programming](#dynamic-programming)
    - [(53) Maximum Subarray](#53-maximum-subarray)
    - [(576)Out of Boundary paths](#576out-of-boundary-paths)
  - [Waiting for classification](#waiting-for-classification)
    - [Add Two Numbers](#add-two-numbers)

## Dynamic Programming

### (53) Maximum Subarray
> Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.  
> A **subarray** is a **contiguous** part of an array.


**Example:**
```	
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Input: nums = [1]
Output: 1

Input: nums = [5,4,-1,7,8]
Output: 23
```

#### **Solutions**
> [divide and conquer](https://www.youtube.com/watch?v=5WZl3MMT0Eg)  
> [Maximum subarray problem](https://en.wikipedia.org/wiki/Maximum_subarray_problem)

#### Code
- **JavaScript**
    ```JavaScript
    let maxSub = nums[0];
    let curSum = 0;
    for (let num of nums) {
        if (curSum < 0) {
            curSum = 0;
        }
        curSum += num;
        maxSub = Math.max(maxSub, curSum);
    }
    return maxSub;

    /*
   for(let i=1; i<nums.length;i++){  
       nums[i] = Math.max(nums[i],nums[i]+nums[i-1])
       console.log(nums[i], nums[i]+nums[i-1])
       }
    return Math.max(...nums)
    */

    /*
    Time Limit Exceeded.If i need to return the array in the O(n) time complexity.
    How to do that..
    
    let maxSum = nums[0];
    let curSum = 0;
    let sliceStart = 0;
    let sliceEnd = nums.length;

    for (let i = 0; i < nums.length; i++) {
        curSum = 0;
        for (let j = i; j < nums.length; j++) {
            curSum += nums[j];
            if (maxSum <= curSum) {
                maxSum = curSum;
                sliceStart = i;
                sliceEnd = j;
            }
        }
    }
    console.log(nums.slice(sliceStart, sliceEnd + 1));
    return maxSum;

    */
    ```

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

## Waiting for classification

### Add Two Numbers
> You are given two **non-empty** linked lists representing two non-negative integers.The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.  
> You may assume the two numbers do not contain any leading zero, except the number `0` itself.

**Example:**
```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [0], l2 = [0]
Output: [0]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

**Constraints:**
- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

#### **Solutions:**

#### Code
- **JavaScript**
  ```javascript
  addTwoNumber = (l1, l2) => {
    // Wrong Answer below. JavaScript has its MAX_SAFE_INTEGER of Number.
    const convertArr2LinkedList = (arr) => {
      const result = new ListNode();
      let currNode = result;
      arr.forEach((el, index) => {
        currNode.val = el;
        if (index !== arr.length - 1) {
          currNode.next = new ListNode();
          currNode = currNode.next;
        }
      });
      return result;
    };

    const convertNum2Arr = (num) => {
      const result = [];
      while (num > 0) {
        result.push(num % 10);
        num = Math.floor(num / 10);
      }
      return result;
    };

    const convert2Number = (listNode, exponent) => {
      let sum = 0;
      if (listNode.next) {
        const result = convert2Number(listNode.next, exponent + 1);
        sum += result;
      } else return listNode.val * Math.pow(10, exponent);
      sum += listNode.val * Math.pow(10, exponent);
      return sum;
    };
    const l1_num = convert2Number(l1, 0);
    const l2_num = convert2Number(l2, 0);

    console.log(l1_num);
    const targetNum_arr = convertNum2Arr(l1_num + l2_num);
    const result = convertArr2LinkedList(targetNum_arr);
    return result;
    
  };
  ```