class Solution {
	constructor() {}

	twoSum(nums, target) {
		let hashMap = [];
		for (const [key, value] of Object.entries(nums)) {
			if (hashMap[target - value]) {
				return [key, hashMap[target - value]];
			} else hashMap[value] = key;
		}
	}

	isPalindrome(number) {
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
}

// Test
const testSolution = new Solution();
console.log(testSolution.plusOne([1, 2, 3]));
