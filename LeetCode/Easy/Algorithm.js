class Solution {
	constructor() {}

	twoSum_1(nums, target) {
		let hashMap = [];
		for (const [key, value] of Object.entries(nums)) {
			if (hashMap[target - value]) {
				return [key, hashMap[target - value]];
			} else hashMap[value] = key;
		}
	}

	isPalindrome_9(number) {
		// const strNumber = x.toString();
		// const lastNumIndex = strNumber.length - 1;
		// for (let i = 0; i < strNumber.length; i++) {
		//     if (strNumber[i] !== strNumber[lastNumIndex - i]) return false;
		//     else if (i >= lastNumIndex)
		//         return true;
		// }

		if (number < 0 || (number % 10 === 0 && number !== 0)) return false;

		let revertedNum = 0;

		while (number > revertedNum) {
			revertedNum = revertedNum * 10 + (number % 10);
			number = Math.floor(number / 10);
		}

		return number === revertedNum || number === Math.floor(revertedNum / 10);
	}

	transferRoman2Integer(romanNumString) {
		const RomanMap = {
			I: 1,
			V: 5,
			X: 10,
			L: 50,
			C: 100,
			D: 500,
			M: 1000,
		};
		let strLength = romanNumString.length;
		let sum = RomanMap[romanNumString[strLength - 1]];
		for (let index = strLength - 2; index >= 0; index--) {
			if (
				RomanMap[romanNumString[index]] < RomanMap[romanNumString[index + 1]]
			) {
				sum -= RomanMap[romanNumString[index]];
			} else {
				sum += RomanMap[romanNumString[index]];
			}
		}
		return sum;
	}

	LCP(strs) {
		function comparison(leftPart, rightPart) {
			const minLength = Math.min(leftPart.length, rightPart.length);
			for (let index = 0; index < minLength; index++) {
				if (leftPart[index] !== rightPart[index])
					return leftPart.slice(0, index);
			}
			return leftPart.slice(0, minLength);
		}

		function DivideAtMid(strs, leftIndex, rightIndex) {
			if (leftIndex === rightIndex) return strs[leftIndex];
			const mid = Math.floor((leftIndex + rightIndex) / 2);
			const leftPart = DivideAtMid(strs, leftIndex, mid);
			const rightPart = DivideAtMid(strs, mid + 1, rightIndex);
			return comparison(leftPart, rightPart);
		}

		if (strs.length === 0) return "";
		return DivideAtMid(strs, 0, strs.length - 1);
	}

	transform2ListNode(list1, list2) {
		/**
		 * Definition for singly-linked list.
		 * function ListNode(val, next) {
		 *     this.val = (val===undefined ? 0 : val)
		 *     this.next = (next===undefined ? null : next)
		 * }
		 */
		/**
		 * @param   {ListNode} list1
		 * @param   {ListNode} list2
		 * @return  {ListNode}
		 */
		const ListNode = function (val, next) {
			this.val = val === undefined ? null : val;
			this.next = next === undefined ? null : next;
		};
		const transform2ListNode = function (array) {
			if (array.length === 0) return null;
			let result = new ListNode(array[0]);
			if (array[1]) {
				result.next = transform2ListNode(array.slice(1));
			}
			return result;
		};

		let ListNode1 = transform2ListNode(list1);
		let ListNode2 = transform2ListNode(list2);

		let lastNode = null;
		let mergedList = null;

		while (ListNode1 || ListNode2) {
			if (ListNode1 && (!ListNode2 || ListNode1.val < ListNode2.val)) {
				if (lastNode === null) {
					lastNode = ListNode1;
					mergedList = lastNode;
				} else {
					lastNode.next = ListNode1;
					lastNode = lastNode.next;
				}
				ListNode1 = ListNode1.next;
			} else {
				if (lastNode === null) {
					lastNode = ListNode2;
					mergedList = lastNode;
				} else {
					lastNode.next = ListNode2;
					lastNode = lastNode.next;
				}
				ListNode2 = ListNode2.next;
			}
		}
		return mergedList;
	}

	removeDuplicates = function (nums) {
		// let startNumIndex = 0;
		// let duplicateCount = 0;
		// let order = 0;

		// for (let index = 1; index < nums.length; index++) {
		//     if (nums[startNumIndex] === nums[index]) duplicateCount++;
		//     else {
		//         nums[order] = nums[startNumIndex]
		//         order++
		//         startNumIndex = index
		//         duplicateCount = 0
		//         if (index === nums.length -1) {
		//             nums[order] = nums[startNumIndex]
		//         }
		//     }
		// }
		// if (duplicateCount !== 0) nums[order] = nums[startNumIndex]
		// return nums

		let i = 0;
		for (let j = 0; j < nums.length; j++) {
			if (nums[j] !== nums[i]) nums[++i] = nums[j];
		}
		return ++i;
	};

	removeElement(nums, val) {
		let j = 0;
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] !== val) {
				[nums[i], nums[j]] = [nums[j], nums[i]];
				j++;
			}
		}

		nums.splice(j);
		console.log(nums);
		return nums.length;
	}

	implement_strStr(haystack, needle) {
		for (let index in haystack) {
			if (haystack[index] === needle[0]) {
				const resultIndex = index;
				if (haystack.slice(index, Number(index) + needle.length) === needle) {
					return resultIndex;
				}
			}
		}
		return -1;
	}

	searchInsertPosition(nums, target) {
		let startPos = 0;
		let endPos = nums.length - 1;
		while (startPos <= endPos) {
			let midNum = Math.floor((startPos + endPos) / 2);
			let currNum = nums[midNum];
			if (currNum < target) startPos = midNum + 1;
			else if (currNum > target) endPos = midNum - 1;
			else return midNum;
		}
		return startPos;
	}

	maxSubarray(nums) {
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
	}

	getLengthOfLastWordIn(string) {
		// let recordBegin = false;
		// let lastWordLength = 0;
		// for (let j = string.length - 1; j >= 0; j--) {
		// 	if (string[j] !== " ") {
		// 		recordBegin = true;
		// 		lastWordLength++;
		// 	}
		// 	if (string[j] === " " && recordBegin === true) return lastWordLength;
		// }
		// return lastWordLength;

		const regex = /\w+(?=\s+$)|\w+$/gm;
		return string.match(regex).pop().length;
	}

	plusOne(digits) {
		for (j = digits.length - 1; j >= 0; j--) {
			if (digits[j] < 9) {
				digits[j]++;
				return digits;
			} else if (digits[j] === 9) {
				digits[j] = 0;
			}
		}
		digits.unshift(1);
		return digits;
	}

	addBinary(a, b) {
		const maxLength = Math.max(a.length, b.length);
		b = b.padStart(maxLength, "0");
		a = a.padStart(maxLength, "0");
		const resultArr = [];
		let isPlus = 0;
		for (let i = a.length - 1; i >= 0; i--) {
			const tmp = Number(a[i]) + Number(b[i]) + isPlus;
			resultArr.unshift(tmp % 2);
			if (tmp >= 2) isPlus = 1;
			else isPlus = 0;
		}
		if (isPlus) resultArr.unshift(1);
		return resultArr.reduce((x, y) => {
			return String(x) + String(y);
		}, "");
	}

	sqrt(x) {
		let beginNum = 0;
		let endNum = x;
		while (beginNum <= endNum) {
			const midNum = beginNum + Math.floor((endNum - beginNum) / 2);
			const val = midNum * midNum;
			if (val === x) return midNum;
			else if (val > x) {
				endNum = midNum - 1;
			} else beginNum = midNum + 1;
		}
		return endNum;

		// let val = 0;
		// while (val * val <= x) val++;
		// return val - 1;
	}

	ClimbingStairs(n) {
		// DFS. O(2^n)
		let sum = 0;
		let resultNum = 0;
		let operateStep = [];
		function dfs(sum, step) {
			if (step) operateStep.push(step);
			if (sum > n) {
				return 0;
			}
			if (sum === n) {
				console.log(operateStep);
				resultNum++;
				return 0;
			}
			dfs(sum + 1, 1);
			operateStep.pop();
			dfs(sum + 2, 2);
			operateStep.pop();
		}
		dfs(sum);
		return resultNum;

		// DP Top down Memo

		let MemoryArr = [];
		function dpTopDown(target) {
			if (target === 1) return 1;
			if (target === 2) return 2;
			if (MemoryArr[target] !== undefined) return MemoryArr[target];
			let result = dpTopDown(target - 1) + dpTopDown(target - 2);
			MemoryArr[target] = result;
			return result;
		}

		function dp(target) {
			// init data
			let dp = new Array(target + 1);
			dp[1] = 1;
			dp[2] = 2;
			for (let i = 3; i <= n; i++) {
				dp[i] = dp[i - 1] + dp[i - 2];
			}
			return dp[target];
		}

		// DP BottomUp

		let bottom1 = 1;
		let bottom2 = 1;
		for (let i = 0; i < n - 1; i++) {
			let temp = bottom1;
			bottom1 = bottom1 + bottom2;
			bottom2 = temp;
		}
		return bottom1;
	}

	removeDuplicates4SortedList(array) {
		class ListNode {
			constructor(val, next) {
				this.val = val === undefined ? null : val;
				this.next = next === undefined ? null : next;
			}
		}
		const transform2ListNode = function (array) {
			if (array.length === 0) return null;
			let result = new ListNode(array[0]);
			if (array[1]) {
				result.next = transform2ListNode(array.slice(1));
			}
			return result;
		};

		// Ugly way
		let listNode = transform2ListNode(array);
		if (!listNode) return listNode;
		let head = listNode;
		let tmp = listNode.next;
		while (tmp) {
			if (head.val === tmp.val) {
				head.next = head.next.next;
				tmp = head.next;
			} else {
				head = tmp;
				tmp = head.next;
			}
		}
		return listNode;

		//Recursive way
		function deleteDuplicate(ListNode) {
			if (ListNode === null || ListNode.next === null) return ListNode;
			ListNode.next = deleteDuplicate(ListNode.next);
			return ListNode.val === ListNode.next.val ? ListNode.next : ListNode;
		}
	}

	MergeSortedArray(nums1, m, nums2, n) {
		let insertPos = m + n - 1;
		m--;
		n--;
		while (n >= 0) {
			nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
		}
	}

	inorderTraversal(root) {
		/**
		 * Definition for a binary tree node.
		 * function TreeNode(val, left, right) {
		 *     this.val = (val===undefined ? 0 : val)
		 *     this.left = (left===undefined ? null : left)
		 *     this.right = (right===undefined ? null : right)
		 * }
		 */
		/**
		 * @param {TreeNode} root
		 * @return {number[]}
		 */

		function recursiveTraversal(root) {
			if (root.left) recursiveTraversal(root.left);
			resultArr.push(root.val);
			if (root.right) recursiveTraversal(root.right);
		}

		if (!root) return [];
		let resultArr = [];
		recursiveTraversal(root);
		return resultArr;
	}

	isSameTree(p, q) {
		/**
		 * Definition for a binary tree node.
		 * function TreeNode(val, left, right) {
		 *     this.val = (val===undefined ? 0 : val)
		 *     this.left = (left===undefined ? null : left)
		 *     this.right = (right===undefined ? null : right)
		 * }
		 */
		/**
		 * @param {TreeNode} p
		 * @param {TreeNode} q
		 * @return {boolean}
		 */

		// Ugly Way
		const getTreeTraversalOrder = (Tree) => {
			let resultArr = [];
			if (!Tree) return resultArr;
			function preOrderTraversal(root) {
				resultArr.push(root.val);
				if (root.left) {
					preOrderTraversal(root.left);
				} else resultArr.push(null);
				if (root.right) {
					preOrderTraversal(root.right);
				} else resultArr.push(null);
			}
			preOrderTraversal(Tree);
			console.log(resultArr);
			return resultArr;
		};
		return (
			getTreeTraversalOrder(q).toString() ===
			getTreeTraversalOrder(p).toString()
		);

		// Better Way
		if (p === null && q === null) return true;
		if (p === null || q === null) return false;
		if (p.val === q.val) {
			return (
				this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
			);
		}
	}

	isSymmetric(root) {
		/**
		 * Definition for a binary tree node.
		 * function TreeNode(val, left, right) {
		 *     this.val = (val===undefined ? 0 : val)
		 *     this.left = (left===undefined ? null : left)
		 *     this.right = (right===undefined ? null : right)
		 * }
		 */
		/**
		 * @param {TreeNode} root
		 * @return {boolean}
		 */
		function recursiveCheck(left, right) {
			if (left === right) return true;
			if (!left || !right) return false;
			if (left.val !== right.val) return false;
			return (
				recursiveCheck(left.left, right.right) &&
				recursiveCheck(left.right, right.left)
			);
		}
		return recursiveCheck(root.left, root.right);
	}

	maxDepth(root) {
		/**
		 * Definition for a binary tree node.
		 * function TreeNode(val, left, right) {
		 *     this.val = (val===undefined ? 0 : val)
		 *     this.left = (left===undefined ? null : left)
		 *     this.right = (right===undefined ? null : right)
		 * }
		 */
		/**
		 * @param {TreeNode} root
		 * @return {number}
		 */
		let depth = 0;
		if (!root || root.val === null) return depth;
		return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
	}

	sortedArrayToBST(nums) {
		/**
		 * Definition for a binary tree node.
		 * function TreeNode(val, left, right) {
		 *     this.val = (val===undefined ? 0 : val)
		 *     this.left = (left===undefined ? null : left)
		 *     this.right = (right===undefined ? null : right)
		 * }
		 */
		/**
		 * @param {number[]} nums
		 * @return {TreeNode}
		 */
		if (!nums || nums.length === 0) return null;
		if (nums.length === 1) return new TreeNode(nums[0]);
		const midNum = Math.floor(nums.length / 2);
		console.log(midNum);
		let root = new TreeNode(
			nums[midNum],
			sortedArrayToBST(nums.slice(0, midNum)),
			sortedArrayToBST(nums.slice(midNum + 1))
		);
		return root;
	}

	isBalanced(root) {
		/**
		 * Definition for a binary tree node.
		 * function TreeNode(val, left, right) {
		 *     this.val = (val===undefined ? 0 : val)
		 *     this.left = (left===undefined ? null : left)
		 *     this.right = (right===undefined ? null : right)
		 * }
		 */
		/**
		 * @param {TreeNode} root
		 * @return {boolean}
		 */

		// DFS Way O(NlogN)
		// const getDepth = (root) => {
		// 	if (root === null) return 0;
		// 	return Math.max(getDepth(root.left), getDepth(root.right) + 1);
		// };
		// if (root === null) return true;
		// const leftDepth = getDepth(root.left);
		// const rightDepth = getDepth(root.right);
		// return (
		// 	Math.abs(leftDepth - rightDepth) <= 1 &&
		// 	this.isBalanced(root.left) &&
		// 	this.isBalanced(root.right)
		// );

		// Bottom Up
		function bottomUp(root) {
			if (root === null) return [true, 0];
			const left = bottomUp(root.left);
			const right = bottomUp(root.right);
			const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
			return [balanced, Math.max(left[1], right[1]) + 1];
		}
		return bottomUp(root)[0];
	}

	minDepth(root) {
		if (root === null) return 0;
		const left = minDepth(root.left);
		const right = minDepth(root.right);
		return left === 0 || right === 0
			? Math.max(left, right) + 1
			: Math.min(left, right) + 1;
	}
	hasPathSum(root, targetSum) {
		if (root === null) return false;
		if (root.left === null && root.right === null && targetSum - root.val === 0)
			return true;
		return (
			this.hasPathSum(root.left, targetSum - root.val) ||
			this.hasPathSum(root.right, targetSum - root.val)
		);
	}
	generate(numRows) {
		let resultArr = [];
		for (let element = 1; element <= numRows; element++) {
			if (element === 1) resultArr.push([1]);
			if (element === 2) resultArr.push([1, 1]);
			if (element > 2) {
				let arr = [1];
				for (let index = 1; index < element - 1; index++) {
					arr[index] =
						resultArr[element - 2][index] + resultArr[element - 2][index - 1];
				}
				arr.push(1);
				resultArr.push(arr);
			}
		}
		return resultArr;
	}

	getRow(rowIndex) {
		if (rowIndex === 0) return [1];
		if (rowIndex === 1) return [1, 1];
		const arr = [];
		getRow(rowIndex - 1).reduce((x, y) => {
			arr.push(x + y);
			return y;
		});
		return [1, ...arr, 1];
	}

	maxProfit(prices) {
		let result = 0;
		let boughtPricesIndex = 0;
		let sellPricesIndex = 1;
		while (sellPricesIndex <= prices.length) {
			if (prices[boughtPricesIndex] < prices[sellPricesIndex]) {
				result = Math.max(
					prices[sellPricesIndex] - prices[boughtPricesIndex],
					result
				);
			} else {
				boughtPricesIndex = sellPricesIndex;
			}
			sellPricesIndex++;
		}
		return result;
	}

	isPalindrome125(s) {
		const test = /[a-zA-Z0-9]+/g;
		if (s.match(test)) {
			s = s
				.match(/[a-zA-Z0-9]+/gm)
				.reduce((x, y) => {
					return x + y;
				})
				.toLowerCase();
			console.log(s);
			let leftPoint = 0;
			let rightPoint = s.length - 1;
			while (leftPoint <= rightPoint) {
				if (s[leftPoint] === s[rightPoint]) {
					leftPoint++;
					rightPoint--;
				} else return false;
			}
			return true;
		}
		return true;

		// LeetCode Discuss kabriel's solutions; Nice one.
		// function isLetter(code) {
		// 	if (
		// 		(code >= 48 && code <= 57) ||
		// 		(code >= 65 && code <= 90) ||
		// 		(code >= 97 && code <= 122)
		// 	) {
		// 		return true;
		// 	} else return false;
		// }

		// function toLowerCase(code) {
		// 	if (code >= 65 && code <= 90) {
		// 		return code + 32;
		// 	} else return code;
		// }

		// let leftPoint = 0;
		// let rightPoint = s.length - 1;
		// while (leftPoint <= rightPoint) {
		// 	const start = s.charCodeAt(leftPoint);
		// 	const end = s.charCodeAt(rightPoint);
		// 	if (!isLetter(start)) {
		// 		leftPoint++;
		// 		continue;
		// 	}
		// 	if (!isLetter(end)) {
		// 		rightPoint--;
		// 		continue;
		// 	}
		// 	if (toLowerCase(start) !== toLowerCase(end)) {
		// 		return false;
		// 	}
		// 	leftPoint++;
		// 	rightPoint--;
		// }
		// return true;
	}

	singleNumber(nums) {
		// const tmp = Array.from(new Set(nums));
		// return tmp.reduce((x, y) => x + y) * 2 - nums.reduce((x, y) => x + y);

		// Brute Force
		// const temp = nums;
		// for (let baseIndex = 0; baseIndex < temp.length - 1; baseIndex++) {
		// 	let delBase_Flag = false;
		// 	if (temp[baseIndex === undefined]) continue;
		// 	for (
		// 		let compareIndex = baseIndex + 1;
		// 		compareIndex < temp.length;
		// 		compareIndex++
		// 	) {
		// 		if (temp[compareIndex] === undefined) continue;
		// 		if (temp[baseIndex] === temp[compareIndex]) {
		// 			delete temp[compareIndex];
		// 			delBase_Flag = true;
		// 		}
		// 	}
		// 	if (delBase_Flag) {
		// 		delete temp[baseIndex];
		// 	}
		// }
		// return temp.filter((el) => el !== undefined)[0];

		// Use Sorting and compare the neighbors.

		// Using Hashing/Set
		// const hashTable = {};
		// nums.forEach((num) => {
		// 	if (hashTable[num]) hashTable[num] = false;
		// 	else hashTable[num] = true;
		// });
		// console.log(hashTable);
		// for (const [key, value] of Object.entries(hashTable)) {
		// 	if (value) return key;
		// }

		// Use Xor/Bit Manipulation
		let xor = 0;
		nums.forEach((num) => {
			xor ^= num;
		});
		return xor;
	}

	hasCycle141(head) {
		if (!head || head.next === null) return false;
		let slowPointer = head;
		let fastPointer = head.next;
		while (slowPointer && fastPointer) {
			if (slowPointer === fastPointer) return true;
			if (!slowPointer.next || !fastPointer.next || !fastPointer.next.next)
				return false;
			slowPointer = slowPointer.next;
			fastPointer = fastPointer.next.next;
		}
		return false;
	}

	preorderTraversal_144(root) {
		//  Recursive solution is trivial
		const resultArr = [];
		const recursiveTraversal = (root, resultArr) => {
			if (root === null) return resultArr;
			resultArr.push(root.val);
			recursiveTraversal(root.left, resultArr);
			recursiveTraversal(root.right, resultArr);
		};
		recursiveTraversal(root, resultArr);
		return resultArr;

		// Iteration Solution
		let currNode = root;
		const result = [];
		const stack = [];
		while (currNode !== null || stack.length > 0) {
			if (currNode !== null) {
				result.push(currNode.val);
				stack.push(currNode);
				currNode = currNode.left;
			} else {
				currNode = stack.pop();
				currNode = currNode.right;
			}
		}
		return result;
	}

	postorderTraversal_145(root) {
		//  Recursive solution is trivial
		const resultArr = [];
		const recursiveTraversal = (root, resultArr) => {
			if (root === null) return resultArr;
			recursiveTraversal(root.left, resultArr);
			recursiveTraversal(root.right, resultArr);
			resultArr.push(root.val);
		};
		recursiveTraversal(root, resultArr);
		return resultArr;

		// Iterative Solution (Reverse the process of preorder)
		const result = [];
		const stack = [];
		let currNode = root;
		while (currNode !== null || stack.length > 0) {
			if (currNode !== null) {
				stack.push(currNode);
				Array.prototype.result.unshift(currNode.val);
				currNode = currNode.right;
			} else {
				currNode = stack.pop();
				currNode = currNode.left;
			}
		}
		return result;
	}

	convertToTitle_168(columnNumber) {
		const convert2Char = (num) => {
			return String.fromCharCode(num + 64);
		};

		const numArr = [];
		let lastNum = columnNumber % 26;
		let dividedNum = Math.floor(columnNumber / 26);
		if (lastNum === 0) {
			lastNum = 26;
			dividedNum--;
		}
		numArr.unshift(lastNum);
		if (columnNumber > 26) {
			while (dividedNum > 26) {
				lastNum = dividedNum % 26;
				dividedNum = Math.floor(dividedNum / 26);
				if (lastNum === 0) {
					lastNum = 26;
					dividedNum--;
				}
				numArr.unshift(lastNum);
			}
			numArr.unshift(dividedNum);
		}

		const result = numArr
			.map((el) => convert2Char(el))
			.reduce((x, y) => {
				return x + y;
			});
		return result;
	}

	titleToNumber_171(columnTitle) {
		const notOnlyUpcaseChar = /[\W||a-z]+/gm;
		if (columnTitle.match(notOnlyUpcaseChar)) {
			console.error("Only available for upcase charter.");
			return null;
		}
		const operateArr = [...columnTitle].map((el) => {
			return el.charCodeAt() - 64;
		});
		console.log(operateArr);
		let carryNum = 0;
		return operateArr.reduceRight((x, y) => {
			const reduceResult = x + Math.pow(26, carryNum) * y;
			carryNum++;
			return reduceResult;
		}, 0);
	}

	majorityElement_169(nums) {
		const numCount = {};
		for (const num of nums) {
			if (numCount[num]) numCount[num]++;
			else numCount[num] = 1;
		}
		const result = Object.keys(numCount).reduce((x, y) => {
			return Math.max(numCount[x], numCount[y]) === numCount[x] ? x : y;
		});
		return result;
	}

	getIntersectionNode_160(headA, headB) {
		// Ugly Way
		let len_a = 0;
		let len_b = 0;
		let pointer_a = headA;
		let pointer_b = headB;
		while (pointer_a) {
			len_a++;
			pointer_a = pointer_a.next;
		}
		while (pointer_b) {
			len_b++;
			pointer_b = pointer_b.next;
		}
		pointer_a = headA;
		pointer_b = headB;

		if (len_a > len_b) {
			for (let index = 0; index < len_a - len_b; index++) {
				pointer_a = pointer_a.next;
			}
		} else {
			for (let index = 0; index < len_b - len_a; index++) {
				pointer_b = pointer_b.next;
			}
		}
		while (pointer_a !== pointer_b) {
			pointer_a = pointer_a.next;
			pointer_b = pointer_b.next;
		}
		return pointer_a;

		// hashmap way
		// const hashmap = new Map();
		// let pointer_a = headA;
		// let pointer_b = headB;
		// while (pointer_a) {
		// 	hashmap.set(pointer_a);
		// 	pointer_a = pointer_a.next;
		// }

		// while (pointer_b) {
		// 	if (hashmap.has(pointer_b)) return pointer_b;
		// 	pointer_b = pointer_b.next;
		// }
		// return null;

		// O(M + N) TIME, O(1) Space.
		// let pointer_a = headA;
		// let pointer_b = headB;
		// while (pointer_a !== pointer_b) {
		// 	pointer_a = pointer_a === null ? headB : pointer_a.next;
		// 	pointer_b = pointer_b === null ? headA : pointer_b.next;
		// }
		// return pointer_a;
	}

	majorityElement_169(nums) {
		const numCount = {};
		for (const num of nums) {
			if (numCount[num]) numCount[num]++;
			else numCount[num] = 1;
		}
		const result = Object.keys(numCount).reduce((x, y) => {
			return Math.max(numCount[x], numCount[y]) === numCount[x] ? x : y;
		});
		return result;
	}

	reverseBits_190(binaryNum) {
		const arr_binaryNum = Array.from(binaryNum.toString(2).padStart(32, "0"));
		const arr_decNumOf32Bit = arr_binaryNum.map((el, index) => {
			return Math.pow(2, index) * Number(el);
		});
		const resultSum = arr_decNumOf32Bit.reduce((x, y) => {
			return x + y;
		});
		return resultSum;

		// Bit Manipulation
		let result = 0;
		for (let index = 0; index < 32; index++) {
			const temp = (binaryNum >> index) & 1; // Preprocess to reset the bit after the needed bit;
			temp = temp << (31 - index); // Same as above: To reset the bit ahead of the needed bit;
			result |= temp; // Store every different bit from each loop for the result.
		}
		return result;
	}

	hammingWeight_191 = (positiveNum) => {
		let bitCount = 0;
		while (positiveNum >= 1) {
			if (positiveNum % 2 === 1) {
				bitCount++;
			}
			positiveNum = Math.floor(positiveNum / 2);
		}
		return bitCount;

		// O(1)
		while (bitCount > 0) {
			bitCount++;
			positiveNum &= positiveNum - 1;
		}
		return bitCount;

		return positiveNum
			.toString(2)
			.split("")
			.filter((el) => el === "1").length;
	};

	isHappy_202 = (num) => {
		// Ugly Way
		const mem = new Map();
		const valid = (num) => {
			let sum = 0;
			while (num > 0) {
				sum += Math.pow(num % 10, 2);
				num = Math.floor(num / 10);
			}
			if (sum === 1) return true;
			if (mem.get(sum)) {
				return false;
			} else {
				mem.set(sum, 1);
				return valid(sum);
			}
		};
		return valid(num);
	};

	removeElements_203 = (head, val) => {
		if (!head) return head;
		let currHead = head;
		let currNext = head.next;
		while (currNext) {
			if (currNext.val === val) {
				currHead.next = currNext.next;
				currNext = currHead.next;
			} else {
				currHead = currNext;
				currNext = currHead.next;
			}
		}
		if (head.val === val) return head.next;
		return head;
	};

	isIsomorphic_205 = (s, t) => {
		const matchMap_s = new Map();
		const matchMap_t = new Map();
		for (index in s) {
			if (!matchMap_s.get(s[index]) && !matchMap_t.get(t[index])) {
				matchMap_s.set(s[index], t[index]);
				matchMap_t.set(t[index], s[index]);
			} else if (
				matchMap_s.get(s[index] !== t[index]) ||
				matchMap_t.get(t[index]) !== s[index]
			)
				return false;
		}
		return true;
	};

	reverseList_206 = (lt) => {
		// Iteratively Way
		let baseList = lt;
		let preListNode = null;
		let currListNode = null;
		while (baseList) {
			currListNode = new ListNode();
			currListNode.val = baseList.val;
			currListNode.next = preListNode;
			preListNode = currListNode;
			baseList = baseList.next;
		}
		return currListNode;

		// Recursively Way
		let result = null;
		const recursive = (lt) => {
			let latestNode = null;
			if (!lt) return null;
			if (lt.next) {
				latestNode = recursive(lt.next);
			} else {
				result = new ListNode(lt.val);
				return result;
			}
			latestNode.next = new ListNode(lt.val);
			return latestNode.next;
		};
		recursive(lt);
		return result;
	};

	containsDuplicate_217 = (nums) => {
		// Hash Map
		const memoryMap = new Map();
		for (index in nums) {
			if (memoryMap.get(nums[index])) return true;
			else memoryMap.set(nums[index], 1);
		}
		return false;

		// Sorted
	};

	containsNearbyDuplicate_219 = (nums, k) => {
		// Time Limit Exceeded.
		const range = k;
		let startIndex = 0;
		while (startIndex < nums.length) {
			const memoryMap = new Map();
			for (let loopTime = 0; loopTime <= range; loopTime++) {
				if (memoryMap.get(nums[startIndex + loopTime])) return true;
				else if (startIndex + loopTime < nums.length) {
					memoryMap.set(nums[startIndex + loopTime], 1);
				} else return false;
			}
			startIndex++;
		}
		return false;

		// Correct
		const memoryMap = new Map();
		for (const index in nums) {
			if (memoryMap.get(nums[index])) {
				if (Math.abs(index - memoryMap.get(nums[index]) <= k)) return true;
				else memoryMap.set(nums[index], index);
			} else memoryMap.set(nums[index], index);
		}
		return false;
	};

	implementStackByQueues_225 = () => {};
}

// Test
const testSolution = new Solution();
console.log(testSolution.hammingWeight_191());
