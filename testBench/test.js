function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

const isPalindrome_234 = (head) => {
	let forward = head;
	let backward = undefined;
	const recursive = (head) => {
		if (head.next) {
			const comparison = recursive(head.next);
			if (comparison === 1) return 1;
			if (comparison === true) {
				forward = forward.next;
				if (forward === backward || forward === head) return 1; // Not necessary to compare.
				backward = head;
				return forward.val === backward.val;
			} else return false;
		} else {
			backward = head;
			return forward.val === backward.val;
		}
	};
	return recursive(head);
};

const test = new ListNode(1, new ListNode(2));
console.log(test);
isPalindrome_234(test);
