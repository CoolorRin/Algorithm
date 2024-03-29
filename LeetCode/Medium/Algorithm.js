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

	lowestCommonAncestor(root, p, q) {
		const path2p = [];
		const path2q = [];
		const getPath = (root, node, path = []) => {
			if (root === null) return false;
			path.push(root);
			if (root === node) return path;
			if (!getPath(root.left, node, path) && !getPath(root.right, node, path)) {
				path.pop();
				return false;
			} else return path;
		};
		return getPath(root, p);
	}

	addTwoNumber = (l1, l2) => {
		// Wrong Answer. Javascript have max safe integer: Number.MAX_SAFE_INTEGER
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

		//
	};
}

class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const testNode = new TreeNode(1);
testNode.left = new TreeNode(5);
testNode.right = new TreeNode(1);
testNode.left.left = new TreeNode(8);
testNode.left.right = new TreeNode(7);

const p = testNode.right;

const test = new solutions();
console.log(test.lowestCommonAncestor(testNode, p));
