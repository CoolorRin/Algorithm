class MyQueue {
	constructor() {
		// The prototype of MyQueue
		// Initialize the variable
		this.queue = [];
		this.len = 0;
	}
	push(el) {
		this.len++;
		let tmp = new Array(this.len);
		for (let i = 0; i < this.len; i++) {
			if (this.queue[i] !== undefined) tmp[i] = this.queue[i];
			else {
				tmp[i] = el;
			}
		}
		this.queue = tmp;
	}
	peek() {
		return this.queue[0];
	}
	pop() {
		const tmp = new Array(this.len - 1);
		let index = 0;
		const popVal = this.queue[0];
		for (let i = 1; i < this.len; i++) {
			tmp[index] = this.queue[i];
			index++;
		}
		this.queue = tmp;
		this.len--;
		return popVal;
	}
	empty() {
		return this.len === 0;
	}
}

const test = new MyQueue();
test.push(1);
test.push(2);
test.push(3);
test.pop();
test.peek();
test.pop();
test.pop();
test.empty();
