class Solution {
	constructor() {

	}

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

		if (number < 0 || number % 10 === 0 && number !== 0) return false;

		let revertedNum = 0;

		while (number > revertedNum) {
			revertedNum = revertedNum * 10 + number % 10;
			number = Math.floor(number / 10)
		}

		return number === revertedNum || number === Math.floor(revertedNum / 10);

	};

	transferRoman2Integer(romanNumString) {
		const RomanMap = {
			"I": 1,
			"V": 5,
			"X": 10,
			"L": 50,
			"C": 100,
			"D": 500,
			"M": 1000,
		}
		let strLength = romanNumString.length
		let sum = RomanMap[romanNumString[strLength - 1]]
		for (let index = strLength - 2; index >= 0; index--) {
			if (RomanMap[romanNumString[index]] < RomanMap[romanNumString[index + 1]]) {
				sum -= RomanMap[romanNumString[index]]
			} else {
				sum += RomanMap[romanNumString[index]]
			}
		}
		return sum
	};

	LCP(strs) {
		function comparison(leftPart, rightPart) {
			const minLength = Math.min(leftPart.length, rightPart.length)
			for (let index = 0; index < minLength; index++) {
				if (leftPart[index] !== rightPart[index])
					return leftPart.slice(0, index)
			}
			return leftPart.slice(0, minLength)
		}

		function DivideAtMid(strs, leftIndex, rightIndex) {
			if (leftIndex === rightIndex) return strs[leftIndex]
			const mid = Math.floor((leftIndex + rightIndex) / 2)
			const leftPart = DivideAtMid(strs, leftIndex, mid)
			const rightPart = DivideAtMid(strs, mid + 1, rightIndex)
			return comparison(leftPart, rightPart)
		}

		if (strs.length === 0) return ""
		return DivideAtMid(strs, 0, strs.length - 1)
	};

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
		}
		const transform2ListNode = function (array) {
			if (array.length === 0) return null
			let result = new ListNode(array[0]);
			if (array[1]) {
				result.next = transform2ListNode(array.slice(1))
			}
			return result;
		}

		let ListNode1 = transform2ListNode(list1);
		let ListNode2 = transform2ListNode(list2);

		let lastNode = null
		let mergedList = null

		while (ListNode1 || ListNode2) {
			if (ListNode1 && (!ListNode2 || ListNode1.val < ListNode2.val)) {
				if (lastNode === null) {
					lastNode = ListNode1
					mergedList = lastNode
				} else {
					lastNode.next = ListNode1;
					lastNode = lastNode.next;
				}
				ListNode1 = ListNode1.next
			} else {
				if (lastNode === null) {
					lastNode = ListNode2;
					mergedList = lastNode;
				} else {
					lastNode.next = ListNode2;
					lastNode = lastNode.next;
				}
				ListNode2 = ListNode2.next
			}
		}
		return mergedList
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
			if (nums[j] !== nums[i])
				nums[++i] = nums[j];
		}
		return ++i;
	}

}

// Test
const testSolution = new Solution()
console.log(testSolution.transform2ListNode([1, 2, 4], [1, 3, 4]))