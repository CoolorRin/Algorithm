function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const invertTree = (root) => {
	if (root === undefined) return;
	const tmp = root.right;
	root.right = root.left;
	root.left = tmp;
	invertTree(root.left);
	invertTree(root.right);
};

const test = (el) => {
	if (el === 3) return el;
	console.log("test");
	test(el + 1);
	return el;
};
console.log(test(1));
