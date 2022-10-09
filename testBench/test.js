addTwoNumber = (l1, l2) => {
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

	const convertLinkedList2NumberArr = (list) => {
		const resultArr = [];
		while (list) {
			resultArr.push(list.val);
			list = list.next;
		}
		return resultArr;
	};

	const l1_num = convert2Number(l1, 0);
	const l2_num = convert2Number(l2, 0);

	console.log(l1_num);
	const targetNum_arr = convertNum2Arr(l1_num + l2_num);
	const result = convertArr2LinkedList(targetNum_arr);
	return result;
};

const containsNearbyDuplicate_219 = (nums, k) => {
	// Time Limit Exceeded.
	// const range = k;
	// let startIndex = 0;
	// while (startIndex < nums.length) {
	// 	const memoryMap = new Map();
	// 	for (let loopTime = 0; loopTime <= range; loopTime++) {
	// 		if (memoryMap.get(nums[startIndex + loopTime])) return true;
	// 		else if (startIndex + loopTime < nums.length) {
	// 			memoryMap.set(nums[startIndex + loopTime], 1);
	// 		} else return false;
	// 	}
	// 	startIndex++;
	// }
	// return false;

	const memoryMap = new Map();
	for (const index in nums) {
		if (memoryMap.get(nums[index])) {
			if (Math.abs(index - memoryMap.get(nums[index]) <= k)) return true;
			else memoryMap.set(nums[index], index);
		} else memoryMap.set(nums[index], index);
	}
	return false;
};

class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const l1 = new ListNode(1);
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// console.log(addTwoNumber(l1, l2));
console.log(containsNearbyDuplicate_219([1, 2, 3, 1, 2, 3], 2));

// Implement stack using Queues.
const MyStack = () => {
	this.stack = new Array();
	this.size = 0;
	return null;
};

MyStack.prototype.push = (el) => {
	const tarArr = new Array(this.size + 1);
	for (const index in tarArr) {
		if (this.stack[index] !== undefined) {
			tarArr[index] = this.stack[index];
		} else {
			tarArr[index] = el;
		}
	}
	this.stack = tarArr;
	this.size++;
};

MyStack.prototype.pop = () => {
	const tarArr = new Array(this.size - 1);
	for (const index in this.stack) {
		if (index <= this.size - 1) {
			tarArr[index] = this.stack[index];
		} else {
			this.size = this.size - 1;
			const popResult = this.stack[index];
			this.stack = tarArr;
			return popResult;
		}
	}
};

MyStack.empty = () => {
	if (this.size === 0) return true;
	else return false;
};

MyStack.top = () => {
	return this.stack[this.size - 1];
};
