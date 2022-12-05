const pathOfBinaryTree = (root) => {
	if (!root) return null;
	const result = [];
	const traversal = (root, paths = []) => {
		paths.push(root.val);
		if (root.left) traversal(root.left, paths);
		if (root.right) traversal(root.right, paths);
		if (!root.left & !root.right) {
			if (paths.length > 1) {
				result.push(paths.join("->"));
			} else result.push(paths.join());
		}
		paths.pop();
	};
	traversal(root);
	return result;
};

function BinaryTree(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const test = new BinaryTree(
	1,
	new BinaryTree(2, new BinaryTree(4)),
	new BinaryTree(3, new BinaryTree(5))
);
console.log(pathOfBinaryTree(test));
