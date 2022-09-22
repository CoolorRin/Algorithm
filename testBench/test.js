addTwoNumber = (l1, l2) => {
	// TODO: Waitting for optimize.
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

class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const l1 = new ListNode(1);
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// console.log(addTwoNumber(l1, l2));
console.log(reverseList(l2));
