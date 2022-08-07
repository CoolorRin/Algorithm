# Easy Question
**Table Content**

- [Easy Question](#easy-question)
  - [Spacial Algorithm](#spacial-algorithm)
    - [(169) Majority Element](#169-majority-element)
  - [Data structure](#data-structure)
    - [(13) Roman to Integer](#13-roman-to-integer)
    - [(118) Pascal's Triangle](#118-pascals-triangle)
    - [(119) Pascal's Triangle II](#119-pascals-triangle-ii)
    - [(1) Two Sum](#1-two-sum)
    - [(235) Lowest Common Ancestor of a Binary Search Tree](#235-lowest-common-ancestor-of-a-binary-search-tree)
    - [(160) Intersection of Two Linked lists](#160-intersection-of-two-linked-lists)
    - [(136) Single Number](#136-single-number)
    - [(141) Linked List Cycle](#141-linked-list-cycle)
    - [(144) Binary Tree Preorder Traversal](#144-binary-tree-preorder-traversal)
    - [(145) Binary Tree Postorder Traversal](#145-binary-tree-postorder-traversal)
  - [Dynamic Programming](#dynamic-programming)
    - [(70) ClimbingStair](#70-climbingstair)
  - [Bit Manipulation](#bit-manipulation)
    - [(190) Reverse bits](#190-reverse-bits)
  - [Math](#math)
    - [(69) Sqrt](#69-sqrt)
    - [(121) Best Time to Buy and Sell Stock](#121-best-time-to-buy-and-sell-stock)
    - [(9) Palindrome Number](#9-palindrome-number)
    - [(171) Excel Sheet Column Number](#171-excel-sheet-column-number)
    - [(168) Excel Sheet Column Title](#168-excel-sheet-column-title)
  - [String Operate](#string-operate)
    - [(14) Longest Common Prefix(LCP)](#14-longest-common-prefixlcp)
    - [(125) Valid Palindrome](#125-valid-palindrome)
  - [Waiting for classification.](#waiting-for-classification)
    - [Merge Two Sorted Lists](#merge-two-sorted-lists)
    - [Remove Duplicates from Sorted Array](#remove-duplicates-from-sorted-array)
    - [Remove Element](#remove-element)
    - [Implement strStr()](#implement-strstr)
    - [Search insert position](#search-insert-position)
    - [Length of Last word](#length-of-last-word)
    - [Plus one](#plus-one)
    - [Add Binary](#add-binary)
    - [Remove Duplicates from Sorted List](#remove-duplicates-from-sorted-list)
    - [Merge Sorted Array](#merge-sorted-array)
    - [Binary Tree Inorder Traversal](#binary-tree-inorder-traversal)
    - [SameTree](#sametree)
    - [Symmetric Tree](#symmetric-tree)
    - [Maximum Depth of Binary Tree](#maximum-depth-of-binary-tree)
    - [Convert Sorted Array to Binary Search Tree](#convert-sorted-array-to-binary-search-tree)
    - [Balanced Binary Tree](#balanced-binary-tree)
    - [Minimum Depth of Binary Tree](#minimum-depth-of-binary-tree)
    - [Path Sum](#path-sum)


## Spacial Algorithm

### (169) Majority Element
> Given an array `nums` of size `n`, return the majority element.  
> The majority element is the element that appears more than `[n/2]` times. You may assume that the marjority element always exists in the array.  

**Example:**
```
Input: nums = [3,2,3]
Output: 3

Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

**Constraints:**
- `n == nums.length`
- `1 <= n <= 5 * 104`
- `-109 <= nums[i] <= 109`

**IB: follow-up, Could you solve the problem in linear time and in `o(1)` space?**

#### **Solutions:**
- HashTable: Check the code;
- [Other Solutions](https://leetcode.com/problems/majority-element/solution/):**NEED TO SORT OUT.**

#### **Code**
- **JavaScript**
  ```javascript
  // HashTable
  const numCount = {};
  for (const num of nums) {
    if (numCount[num]) numCount[num]++;
    else numCount[num] = 1;
  }
  const result = Object.keys(numCount).reduce((x, y) => {
    return Math.max(numCount[x], numCount[y]) === numCount[x] ? x : y;
  });
  return result;

  // Boyer-Moore Majority Voting Algorithm
  // TODO: NEED SORT OUT
  ```
  

## Data structure

### (13) Roman to Integer

> Roman numerals are repersented by serven different smbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.
> | Symbol | Value |
> | ------ | ----- |
> | I | 1 |
> | V | 5 |
> | X | 10 |
> | L | 50 |
> | C | 100 |
> | D | 500 |
> | M | 1000 |

**Example:**

```
Input: s = "III"
Ouput: 3
```

#### **Solution**

- First thing come out from my mind is loop the whole RomanNumber String and compare with the next number. If the second
  number is bigger, it will be minus by the second number.Otherwise, plus it. **Problem is the lastest number should
  handle first. And no matter lasest number is,**
- `Or Maybe it have the better way`

#### Code

- **JavaScript**

    ```JavaScript
    var transferRoman2Integer(romanNumString)
    {
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
    }
    ```

- **Cpp11**

    ```c++
    int Roman2Integer(std::string RomanString)
    {
        std::map<char, int> RomanMap = {
            {'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000}};
        int sum = RomanMap[RomanString.back()];
        for (int index = RomanString.length() - 2; index >= 0; index--)
        {
                if (RomanMap[RomanString[index]] >= RomanMap[RomanString[index + 1]])
            {
                    sum += RomanMap[RomanString[index]];
            }
            else
            {
                    sum -= RomanMap[RomanString[index]];
            }
        }
    };

    ```

### (118) Pascal's Triangle
> Given an integer numRows, return the first numRows of **Pascal's triangle**.  
> In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:  
> [Pascal's triangle](https://leetcode.com/problems/pascals-triangle/)

**Example:**
```
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Input: numRows = 1
Output: [[1]]
```

**Constraints:**
- `1 <= numRows <= 30`

#### **Solutions**
- Maybe have more better way to figure it out. For Now, just check the code.

#### Code
- **JavScript**
  ```javascript
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
  ```

### (119) Pascal's Triangle II
> Given an integer rowIndex, return the rowIndexth (**0-indexed**) row of the **Pascal's triangle**.  
> In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

**Example:**

```
Input: rowIndex = 3
Output: [1,3,3,1]

Input: rowIndex = 0
Output: [1]

Input: rowIndex = 1
Output: [1,1]
```

**Constraints:**
- `0 <= rowIndex <= 33`

#### **Solutions**
Both of questions about the pascals triangle are inefficient. Find the way to optimize it in the weekend PR commit.  
For Now, Just Check the code below.

#### Code
- **JavaScript**
  ```JavaScript
    var getRow = function(rowIndex) {
      if (rowIndex === 0) return [1];
      if (rowIndex === 1) return [1,1];
      const arr = []
      getRow(rowIndex - 1).reduce((x, y) => {
          arr.push(x + y);
          return y;
      });
      return [1, ...arr, 1];
    };  
  ```

### (1) Two Sum

> Given an array of integer `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.  
> 
> You may assume thar each input world have **exactly one solution**, and you may not use the same element twice.  
> 
> You can return the answer in any order.

**Example:**

  ```
  Input: nums = [3, 2, 4], target = 6;
  Output: [1,2];
  ```

#### **Solutions**

- **Use the hashmap to make the Algorithm that is less than `O(n^2)` time complexity.**

  As the example above, we get the array `[3, 2, 4]` and loop all element in array. Each loop will finded the value
  which is the target minus the value in the array is in the hashMap or not. If not, push element and the index to
  the `Hashmap` as its key, value and continue the loop.

#### Code

- **JavaScript**

    ```javascript
    function twoSum(nums, target) {
        let hashMap = [];
        for (const [key, value] of Object.entries(nums)) {
            if (hashMap[target - value]) {
                return [key, hashMap[target - value]];
            } else hashMap[value] = key;
        }
    }
    ```

- **Cpp11**

    ```c++
    #include "vector"
    #include "iostream"
    #include "map"

    class Solution {
    public:
        std::vector<int> twoSum(std::vector<int>& nums, int target) {
            std::map<int, int>valueMap;
            std::vector<int> result;
            for (int index = 0; index < nums.size(); index++) {
                if(valueMap.find(target - int(nums[index])) != valueMap.end()) {
                    result.push_back(index);
                    result.push_back(valueMap[target - int(nums[index])]);
                    break;
                }
                else {
                    valueMap.insert({int(nums[index]), index});
                }
            }
            return result;
        }
    };

    int main(int argc, char const *argv[])
    {
        Solution s;
        std::vector<int> nums = {2,7,11,15};
        std::vector<int> result;
        int target = 9;
        result = s.twoSum(nums, target);
        return 0;
    }
    ```

### (235) Lowest Common Ancestor of a Binary Search Tree
> Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.  
> According to he `definition of LCA on Wikipedia:`"The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow **a node to be a descendant of itself.**)."  

**Example:**
```
Input: nums = [3,2,3]
Output: 3

Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

**Constraints:**
- `n == nums.length`
- `1 <= n <= 5 * 104`
- `-109 <= nums[i] <= 109`

#### **Solutions:**
- DFS(Top down): Find the path from the tree Root node to the  `p` and `q`, compare both of them, and check the last same node.  Time Complexity: O(n), Space Complexity: O(n). [UglyWay].
- > [BST](https://www.youtube.com/watch?v=gs2LMfuOR9k)
- > [LeetCode Solutions](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/discuss/2335047/C%2B%2B-oror-100-faster-oror-Recursive-Code)(Need to analysis)
#### Code
- **JavaScript**
  ```javascript
  function lowestCommonAncestor(root, p, q) {
    const getPath = (root, node, path = []) => {
      if (root === null) return false;
      path.push(root);
      if (root === node) return path;
      if (!getPath(root.left, node, path) && !getPath(root.right, node, path)) {
        path.pop();
        return false;
      } else return path;
    };
    const path2p = getPath(root, p);
    const path2q = getPath(root, q); 
    let result = null;
    for (index in path2p) {
      if (path2p[index] !== path2q[index]) return result;
      else result = path2p[index];
    }
    return result;
  }

  // BST Way Time: O(n) Space: O(1)
  let cur = root;
  while (cur) {
    if( p.val > cur.val && q.val > cur.val ) {
      cur = cur.right;
    } else if (p.val < cur.val && q.val < cur.val ) {
      cur = cur.left;
    } else return cur
  }

  // LeetCode Solution
  function lowestCommonAncestor_leetcode (root, p, q) {
    if (!root) return root;
    if (root == p || root == q) return root;
    const leftNode = lowestCommonAncestor_leetcode(root.left, p, q);
    const rightNode = lowestCommonAncestor_leetcode(root.right, p, q);
    if (leftNode && rightNode) return root;
    return left ? left : right;
  }
  ```

### (160) Intersection of Two Linked lists
> Given the heads of two singly linked-lists `headA` and `headB`, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return `null`.  
> For example, the following two linked lists begin to intersect at node `c1`:
> ```javascript
> const linkedlist_a = [a1, a2, c1, c2, c3];
> const linkedlist_b = [b1, b2, b3, c1, c2, c3];
> ```
> The test cases are generated such that there are no cycles anywhere in the entire linked structure.
> **Note** that the linked must **retain their original structure** after the function returns.
> **Custom Judge:**
> The input to the **judge** are given as follows (your program is not given these inputs.):
> - `intersecVal` - The value of the node where the intersection occurs.This is `0` if there is no intersected node.
> - `listA`- The first linked list.
> - `listB`- The second linked list.
> - `skipA`- The number of nodes to skip ahead in `listA` (starting from the head) to get to the intersected node.
> - `skipB`- The number of nodes to skip ahead in `listB` (starting from the head) to get tot the intersected node.
> The judge will then crate the linked structure based on these inputs and pass the two heads, `headA` and `headB` to your program. If you correctly return the intersected node, then your solution will be **accepted.**

**Example:**
```
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'

Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'

Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
```

**Constraints:**
- The number of nodes of `listA` is in the `m`.
- The number of nodes of `listB` is in the `n`.
- `1 <= m, n <= 3 * 104`
- `1 <= Node.val <= 105`
- `0 <= skipA < m`
- `0 <= skipB < n`
- `intersectVal` is 0 if `listA` and `listB` do not intersect.
- `intersectVal == listA[skipA] == listB[skipB]` if `listA` and `listB` intersect.

#### **Solutions:**
- HashSet
- **Time Complexity: O(M + N), Space Complexity: O(1)**

#### Code
- **JavaScript**
  ```javascript
  	getIntersectionNode_160(headA, headB) {
		let pointer_a = headA;
		let pointer_b = headB;
		while (pointer_a !== pointer_b) {
			pointer_a = pointer_a === null ? headB : pointer_a.next;
			pointer_b = pointer_b === null ? headA : pointer_b.next;
		}
		return pointer_a;

		// hashmap way
		const hashmap = new Map();
		let pointer_a = headA;
		let pointer_b = headB;
		while (pointer_a) {
		    hashmap.set(pointer_a)
		    pointer_a = pointer_a.next;
		}

		while (pointer_b) {
		    if (hashmap.has(pointer_b)) return pointer_b;
		    pointer_b = pointer_b.next;
		}
		return null;

    // Ugly Way
		let len_a = 0;
		let len_b = 0;
		let pointer_a = headA;
		let pointer_b = headB;
		while (pointer_a) {
		    len_a++;
		    pointer_a = pointer_a.next;
		};
		while (pointer_b) {
		    len_b++;
		    pointer_b = pointer_b.next;
		};
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
	}
  ```

### (136) Single Number
> Given a **non-empty** array of integers `nums`, every element appears twice except for one. Find that single one.  
> You must implement a solution with a linear runtime complexity and use only constant extra space.

**Example:**
```
Input: nums = [2,2,1]
Output: 1

Input: nums = [4,1,2,1,2]
Output: 4

Input: nums = [1]
Output: 1
```

**Constraints:**
- `1 <= nums.length <= 3 * 104`
- `-3 * 104 <= nums[i] <= 3 * 104`
- Each element in the array appears twice except for one element which appears only once.

#### **Solutions:**
> Nice solutions by [satyamsinha93](https://leetcode.com/problems/single-number/discuss/1771771/Think-it-through-oror-Time%3A-O(n)-Space%3A-O(1)-oror-Python-Explained)
> 1. **Brute Force**  
> Intuition:  
> Iterate through every element in the nums and check if any of the element does not appear twice, in that case > return the element.  
> Time: O(n^2)  
> Space: O(1)  
> 1. **Use Sorting**  
> Intuition:  
> If the elements of the nums array are sorted/when we sort it, we can compare the neighbours to find the single element. It is already mentioned that all other elements appear twice except one.  
> Time: O(nlogn) for sorting then O(n) to check neighbouring elements  
> Space: O(1) 
> 1. **Use Hashing/Set**  
> Intuition:  
> i) As we iterate through the nums array we store the elements encountered and check if we find them again while iteration continues. While checking if we find them again, we maintain a single_element object/variable which stores that single element, eventually returning the single_element.  
> ii) The other way is to maintain a num_frequency hashmap/dictionary and iterate over it to find which has exactly 1 frequency and return that key/num. 
> Time: O(n) for iterating over the nums array  
> Space: O(n) for hashing 
> 1. **Use Xor/Bit Manipulation**  
> Intuition:  
> Xor of any two num gives the difference of bit as 1 and same bit as 0.  
> Thus, using this we get 1 ^ 1 == 0 because the same numbers have same bits.  
> So, we will always get the single element because all the same ones will evaluate to 0 and 0^single_number = single_number.   
> Time: O(n)  
> Space: O(1)  


#### Code 
- **JavaScript**
  ```javascript
  singleNumber(nums) {
      Brute Force
      const temp = nums;
      for (let baseIndex = 0; baseIndex < temp.length - 1; baseIndex++) {
      	let delBase_Flag = false;
      	if (temp[baseIndex === undefined]) continue;
      	for (
      		let compareIndex = baseIndex + 1;
      		compareIndex < temp.length;
      		compareIndex++
      	) {
      		if (temp[compareIndex] === undefined) continue;
      		if (temp[baseIndex] === temp[compareIndex]) {
      			delete temp[compareIndex];
      			delBase_Flag = true;
      		}
      	}
      	if (delBase_Flag) {
      		delete temp[baseIndex];
      	}
      }
      return temp.filter((el) => el !== undefined)[0];

      // Use Sorting and compare the neighbors.
      <!-- Pass -->

      // Using Hashing/Set
      const hashTable = {};
      nums.forEach((num) => {
      	if (hashTable[num]) hashTable[num] = false;
      	else hashTable[num] = true;
      });
      console.log(hashTable);
      for (const [key, value] of Object.entries(hashTable)) {
      	if (value) return key;
      }

      // Use Xor/Bit Manipulation
      let xor = 0;
      nums.forEach((num) => {
        xor ^= num;
      });
      return xor;
    }
  ```

### (141) Linked List Cycle
> Given `head`, the head of a linked list, determine if the linked list has a cycle in it.  
> There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, `pos` is used to denote the index of the node that tail's next pointer is connected to. **Note that** `pos` **is not passed as a parameter**.  
> Return `true` if there is a cycle in the linked list. Otherwise, return `false`.  

**Example:**
```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

**Constraints:**
- The number of the nodes in the list is in the range `[0, 104]`.
- `-105 <= Node.val <= 105`
- `pos` is `-1` or a **valid index** in the linked-list.

**Follow up:** Can you solve it using `O(1)` (ie. constant) memory?

#### **Solutions:**
Two pointer, Check the loop till the point.next is null, whether the fastPointer equal to the slowPointer.

#### Code
- **JavaScript**
  ```javascript
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
  ```

### (144) Binary Tree Preorder Traversal
> Given the root of a binary tree, return the preorder traversal of its nodes' values.  

**Example:**
```
Input: root = [1,null,2,3]
Output: [1,2,3]

Input: root = []
Output: []

Input: root = [1]
Output: [1]
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

#### **Solutions**
- Recursive solution is too simple to solve it.
- Iteration solution's point is how to **loop all the children node** of the current node and **memorize it is already looped and backward to loop another node of the parent node.** 
  
#### Code
- **JavaScript**
  ```javascript
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
  ```


### (145) Binary Tree Postorder Traversal
> Given the `root` of a binary tree, return the postorder traversal of its nodes' values.

**Example:**
```
Input: root = [1,null,2,3]
Output: [3,2,1]

Input: root = []
Output: []

Input: root = [1]
Output: [1]
```

**Constraints:**
- The number of the nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

#### **Solutions**
- Iteration Solution by the [yavinci](https://leetcode.com/problems/binary-tree-postorder-traversal/discuss/45551/Preorder-Inorder-and-Postorder-Iteratively-Summarization). **NB: Reverse the process of preorder.**

#### Code
- **JavaScript**
  ```javascript
  var postorderTraversal = function(root, resultArr = []) {
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
				Array.prototype.result.unshift(currNode.val); // unshift the element to the result array.
				currNode = currNode.right;  // Reverse the loop order.
			} else {
				currNode = stack.pop();
				currNode = currNode.left;
			}
		}
		return result;
  };
  ```


## Dynamic Programming

### (70) ClimbingStair
> You are climbing a staircase. It takes `n` steps to reach the top.  
> Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

**Example:**
```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

**Constraints:**
- `i <= n <= 45`

#### **Solutions:**
- Deep First Search (**Inefficient way O(2^n)**).   
  If the purpose is to **get the shortest way** to Climbing up the Stair. Maybe use it.
  ```JavaScript
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
  ```
- Dynamic Programming (Top down Memoization).  
  We have two different way to climbing the stair.Step by `1` or `2`.If we climbing a `three` step height stair, its pattern will be the sum of the `one step height stair` and the `two step height stair`. Check the code.
  
  ```JavaScript
    function dp(target) {
        let memoArr = new Array(target + 1);
        memoArr[1] = 1;
        memoArr[2] = 2;
        for (let i = 3; i <= n; i++) {
            memoArr[i] = memoArr[i - 1] + memoArr[i - 2];
        }
        return memoArr[target]
    }

    let MemoryArr = []
    function dpTopDown(target) {
        if (target === 1) return 1;
        if (target === 2) return 2;
        if (MemoryArr[target] !== undefined) return MemoryArr[target];
        let result = dpTopDown(target - 1) + dpTopDown(target - 2);
        MemoryArr[target] = result;
        return result;
    }

  ```
- Dynamic Programming (Bottom Up).
  > [Climbing Stair- Dynamic Programming](https://www.youtube.com/watch?v=Y0lT9Fck7qI)  
  Image we start by the `0`, and have two way `1` or `2` to climb the stair.Draw the tree diagram and will find that always have the subtree exactly same as the other subtree. That is why we should memory it. But it will have more simply way to do this. Check step below by the `n` is `5`:  
  - First: We get to the `4th` stair and the `5th` stair both will be `1` step to get the `5th` stair. `4th` plus `1` step will be `5th` and why the `5th` will be `1`, just image we only have **one stair**.
  - Then we will find, if we stand in the `3th` stair it will have `2` different way to get to the goal.That is exactly `4th` stair's value plus `5th` stair's value.
  - And then, we find out. 

  ```JavaScript
    let bottom1 = 1;
    let bottom2 = 1;
    for (let i = 0; i < n - 1; i++) {
        let temp = bottom1;
        bottom1 = bottom1 + bottom2;
        bottom2 = temp;
    }
    return bottom1;
  ```


#### Code
- **JavaScript**
  ```javascript
  function ClimbingStairs(n) {
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

  ```

## Bit Manipulation

### (190) Reverse bits
> Reverse bits of a given 32 bits unsigned integer.  
> Note:  
> - Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
> - In Java, the complier represents the signed integers using `2's complement notation`. Therefore, in **Example 2** above, the input represents the signed integer `-3` and the output represents the signed integer `-1073741825`.

**Example:**
```
Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
```

**Constraints**
- The input must be a **binary string** of length `32`.

#### **Solutions**
- Waiting

#### Code
- **JavaScript**
  ```javascript
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
  ```



## Math

### (69) Sqrt
> Given a non-negative integer `x`, compute and return the square root of `x`.  
> Since the return type is an integer, the decimal digits are **truncated**, and only **the integer part** of the result is returned.  
> **Note**: You are not allowed to use any built-in exponent function or operator, such as `pow(x, 0.5)` or `x ** 0.5`.

**Example:**

```
Input: x = 4
Output: 2

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
```

**Constraints:**
- `0 <= x <= 2^31 - 1`

#### **Solutions**
Check the code.

#### Code

- **JavaScript**
    ```JavaScript
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
    ```

### (121) Best Time to Buy and Sell Stock
> You are given an array `prices` where `prices[i]` is the price of a given stock on the ith day.  
> You want to maximize your profit by choosing **a single day** to buy one stock and choosing **a different day in the future** to sell that stock.  
> Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.  

**Example**
```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

**Constraints**
- `1 <= prices.length <= 105`
- `0 <= prices[i] <= 104`

#### **Solutions**
There are two main point to resolve this question. The day to sell the stock must be the right side from the day to buy the stock. To keep the time complexity is O(n), declare two point which point to the left and right. Then compare the profit to get the max one.

#### Code
- **JavaScript**
  ```JavaScript
  var maxProfit = function(prices) {
    let result = 0;
    let boughtPricesIndex = 0;
    let sellPricesIndex = 1;
    while(sellPricesIndex <= prices.length ) {
        if ( prices[boughtPricesIndex] < prices[sellPricesIndex]) {
            result = Math.max(prices[sellPricesIndex] - prices[boughtPricesIndex], result);
        } else {
            boughtPricesIndex = sellPricesIndex;
        }
        sellPricesIndex++;
    };
    return result;
  };
  ```
### (9) Palindrome Number

> Given an integer x, return true if x is palindrome integer.  
> An integer is a palindrome when it reads the same backward as forward.  
> For example, 121 is palindrome while 123 is not.

**Example**:
```
Input: x = 121
Output: true
```

#### **Solutions**

- Convert the `Number` to `String` to make the parameter is iterable and find out **Is the First Number same as the last one, and so on.**  
- Keep in mind that cut the Number in half, revert the behind part it will the same as the front part. So, use the **Remainder Operator** to get the last one number from the given parameter. And remove it from the parameter and compare with the reverted num untill the given number is less or equl the reverted number.**Each loop (the Initialized of reverted num will be 0) the reverted number will times the 10 and plus the last number of the current parameter.**

#### Code

- **JavaScript**

    ```JavaScript
    var isPalindrome = function (x) {
        // const strNumber = x.toString();
        // const lastNumIndex = strNumber.length - 1;
        // for (let i = 0; i < strNumber.length; i++) {
        //     if (strNumber[i] !== strNumber[lastNumIndex - i]) return false;
        //     else if (i >= lastNumIndex) 
        //         return true;
        // }

        if (x < 0 || x % 10 === 0 && x !== 0) return false;

        let revertedNum = 0;

        while (x > revertedNum) {
            revertedNum = revertedNum * 10 + x % 10;
            x = Math.floor(x / 10)
        }

        return x === revertedNum || x === Math.floor(revertedNum / 10);

    };
    ```

- **Cpp11**

    ```c++
        bool isPalindrome(int num)
        {
            std::string numStr = std::to_string(num);
            int frontIndex = 0;
            int endIndex = numStr.length() - 1;
            while (frontIndex < endIndex)
            {
                if (numStr[frontIndex] != numStr[endIndex])
                    return false;
                else
                {
                    frontIndex++;
                    endIndex--;
                }
            }
            return true;
        }
    ```
### (171) Excel Sheet Column Number
> Given a string `columnTitle` that represents the column title as appears in an Excel sheet, return its corresponding column number.

**Example:**
```
Input: columnTitle = "A"
Output: 1

Input: columnTitle = "AB"
Output: 28

Input: columnTitle = "ZY"
Output: 701
```

**Constraints:**
- `1 <= columnTitle.length <= 7`
- `columnTitle` consists only of uppercase English letters.
- columnTitle is in the range `["A", "FXSHRXW"]`.

#### **Solutions:**
Check the code
#### **Code**
- **JavaScript**
  ```javascript
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
  ```


### (168) Excel Sheet Column Title
> Given an integer `columnNumber`, return its corresponding column title as it appears in an Excel Sheet.

**Example:**
```
Input: columnNumber = 1
Output: "A"

Input: columnNumber = 28
Output: "AB"

Input: columnNumber = 701
Output: "ZY"
```

**Constraints:**
- `1 <= columnNumber <= 231 - 1`

#### **Solutions:**
- Math.

#### **Code**
- **JavaScript**
  ```javascript
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
  ```

## String Operate

### (14) Longest Common Prefix(LCP)

> Write a function to find the longest common prefix string amongst an array of strings.<br>
> if there is no common prefix, return an empty string `""`

**Example:**

```
Input: strs = ["flowers", "flow", "flight"]
Output: "fl"
```

**Constraints:**

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i] consists of only lower-case English letters.`

#### **Solutions**

- Just scanning all strings
  > Horizontal Scanning: <br> `LCP(str1, str2, ...strN) = LCP(LCP(LCP(str1, str2), str3), ...strN)`. <br>
  > Vertical
  Scanning: <br> `LCP(str1, str2, ...strN) = LCP(LCP(LCP(char1))) => (Each loop complete will comparison next char with all other str)`
  . <br>Get first char thar loop all other string comparison the first, second and so on untill comparison failed. <br>
- Divide and conquer (**Recursion**)
  > See JavaScript code below.
- [Other Solution](https://leetcode.com/problems/longest-common-prefix/solution/)

#### Code

- **JavaScript**

    ```JavaScript
    LCP(strs)
    {
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
        const result = DivideAtMid(strs, 0, strs.length - 1)
        return result
    }

    ```

- **Cpp11**

    ```C++
    std::string LCP(std::vector<std::string> strs)
    {
        if (strs.empty())
            return "";
        std::strin prefix = strs[0];
        for (int i = 1; i < strs.size(); i++)
        {
            while (strs[i].find(prefix) != 0)
            {
                prefix = prefix.substr(0, prefix.size() - 1);
            }
        }
        return prefix;
    }
    ```

### (125) Valid Palindrome
> A phrase is a `palindrome` if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.  
> Given a string `s`, return true if it is a `palindrome`, or false otherwise.

**Example:**
```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

**Constraints**
- `1 <= s.length <= 2 * 105`
- `s` consists only of printable ASCII characters.

#### **Solutions**
> Check the LeetCode Discuss kabriel's solutions. And check the comment code below.

#### Code 
- **JavaScript**
  ```JavaScript
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
  ```

## Waiting for classification.


### Merge Two Sorted Lists

> You are given the heads of wo sorted linked lists `list1` and `list2`<br>
> Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two
> lists.<br>
> Return the head of the merged linked list.<br>

**Example:**

```
Input: list1 = [1, 2, 4], list2 = [1, 3, 4]
Output: [1, 1, 2, 3, 4, 4]

Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0]
```

**Constraints:**

- The number of nodes in both lists is in the range `[0, 50]`
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sored in **non-decreasing** order.

#### **Solutions**

Check the code.

#### Code
- **JavaScript**

    ```javascript
    mergeTwoLists(list1, list2)
    {
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
    ```

- **Cpp11**

    ```c++
        ListNode *mergeTwoLists(ListNode *list1, ListNode *list2)
        {
            if (list1 != NULL && list2 != NULL)
            {
                ListNode *ans = NULL;
                if (list1->val <= list2->val)
                {
                    ans = list1;
                    ans->next = mergeTwoLists(list1->next, list2);
                }
                else
                {
                    ans = list2;
                    ans->next = mergeTwoLists(list1, list2->next);
                }
                return ans;
            }
            else if (list1 == NULL)
                return list2;
            return list1;
        }
    
    ```

### Remove Duplicates from Sorted Array

> You are given the heads of wo sorted linked lists `list1` and `list2`<br>
> Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two
> lists.<br>
> Reture the head of the merged linked list.<br>

**Example:**

```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Constraints:**

- 1 <= nums.length <= 3 * 104
- -100 <= nums[i] <= 100
- nums is sorted in non-decreasing order.

#### **Solutions**

- Check the code.

#### Code

- **JavaScript**
    ```javascript
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
            if (nums[j] != nums[i])
                nums[++i] = nums[j];
        }
        return ++i;
    }
    ```

### Remove Element
> Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

**Example:**
```
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
```

**Constraints**
- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

#### **Solutions**
- Setting the based number `j`. it will always point to the number which isn't equal to the given value and place in the lastest position in the not-equal-to-value queue.And `i` will be itrate all the `nums`. If nums[i] not equal to the given value.Swtich the `nums[i]` and the `nums[j]`'s position, then `j++`. In the end, the value of `j` will be the result.

#### Code

- **JavaScript**
    ```javascript
    removeElement(nums, val) {
        let j = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                j++;
            }
        }
        nums.splice(j)
        console.log(nums);
        return nums.length;
    }
    ```

### Implement strStr()
> Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

**Example**
```
Input: haystack = "hello", needle = "ll"
Output: 2

Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

**Constraints**
- `1 <= haystack.length, needle.length <= 104`
- `haystack and needle consist of only lowercase English characters.`

#### **Solutions**

Check the code.
#### Code 

- **JavaScript**
    ```JavaScript
    implement_strStr(haystack, needle) {
        for (let index in haystack) {
            if(haystack[index] === needle[0]) {
                const resultIndex = index;
                if(haystack.slice(index, Number(index) + needle.length) === needle) {
                    return resultIndex;
                }
            }
        }
        return -1;
    }
    ```

### Search insert position
> Given a sorted array of distinct intergers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
> You must write an algorithm with `olog(n)` runtime complexity.

**Example:**
```
Input: nums = [1,3,5,6], target = 5
Output: 2

Input: nums = [1,3,5,6], target = 2
Output: 1

Input: nums = [1,3,5,6], target = 7
Output: 4
```

**Constraints:**
- `1 <= nums.length <= 104`
- `-104 <= nums[i] <= 104`
- nums contains distinct values sorted in ascending order.
- `-104 <= target <= 104`

#### **Solutions**

Binary search. Check the code.

#### Code
- **JavaScript**
  ```JavaScript
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

  ```
  


### Length of Last word

> Given a string s consisting of words and spaces, return the length of the last word in the string.  
> A **word** is a maximal substring consisting of non-space characters only.

**Example:**
```
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
```
**Constraints:**
- `1 <= s.length <= 104`
- `s` consists of only English letters and spaces `' '`.
- There will be at least one word in `s`.

#### **Solutions**
Check the code 

#### Code 

- **JavaScript**
    ```javascript
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
    ```

### Plus one
> You are given a **large integer** represented as an integer array `digits`, where each `digits[i]` is the `i^th` digits of the integer.The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.  
> Increment the large integer by one and return the resulting array of digits.

**Example:**
```
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
```

**Constraints:**
- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`
- `digits` does not contain any leading `0`'s.

#### **Solutions**
Check the code

#### Code
- **JavaScript**
    ```JavaScript
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
    ```

### Add Binary
> Given two binary string `a` and `b`, return their sum as a binary string.

**Example:**
```
Input: a = "11", b = "1"
Output: "100"

Input: a = "1010", b = "1011"
Output: "10101"
```

**Constraints:**
- `1 <= a.length, b.length <= 104`
- `a` and `b` consist only of `'0'` or `'1'` characters.
- Each string does not contain leading zeros except for the zero itself.

#### **Solutions**

- Transfer the String to binary number then operate it.
- Fill up the `0` in the less length string. Like `110101` and `110`, fill the `110` to `000110` and operate it. Check the Code.

#### Code

- **JavaScript**
    ```JavaScript
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
    ```

### Remove Duplicates from Sorted List
> Given the `head` of a sorted linked listed, delete all duplicates such that each element appears only once. Return the linked list **sorted** as well.

**Example:**
```
Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]
```

**Constraints:**
- The number of nodes in the list is in the range `[0, 300]`.
- `-100 <= Node.val <= 100`
- The list is guaranteed to be sorted in ascending order.

#### **Solutions**
Check the code.

#### Code 
- **JavaScript**
  ```JavaScript
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
  ```

### Merge Sorted Array
> You are given two integer arrays `nums1` and `nums2`, sorted in **no-decreasing order**, and two integers `m` and `n`, representing the number of elements in the `num1` and `num2` respectively.  
> **Merge** `nums1` and `num2` into a single array sorted in **no-decreasing order**.  
> The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m` + `n`, where the first `m` elements denote the elements that should be merged, and the last n elements are set to `0` and should be ignored. `nums2` has a length of `n`.

**Example:**
```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

**Constraints:**
- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-109 <= nums1[i], nums2[j] <= 109`

#### **Solutions**
Check the code

#### Code
- **JavaScript**
  ```JavaScript
  let insertPos = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
  ```

### Binary Tree Inorder Traversal
> Given the `root` of binary tree, return the inorder traversal of its node's values.

**Example:**
```
Input: root = [1,null,2,3]
Output: [1,3,2]

Input: root = []
Output: []

Input: root = [1]
Output: [1]
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

#### **Solutions**
Check the code.

#### Code 
- **JavaScript**
  ```JavaScript
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
  var inorderTraversal = function(root) {
      function recursiveTraversal(root) {
          if (root.left) recursiveTraversal(root.left);
          resultArr.push(root.val);
          if(root.right) recursiveTraversal(root.right);
      }

      if(!root) return [];
      let resultArr = []
      recursiveTraversal(root);
      return resultArr;
  };
  ```

### SameTree

> Given the  roots of two binary trees `p` and `q`, write a function to check if they are the same or not.  
> Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

**Example:**

```
Input: p = [1,2,3], q = [1,2,3]
Output: true

Input: p = [1,2], q = [1,null,2]
Output: false

Input: p = [1,2,1], q = [1,1,2]
Output: false
```

**Constraints:**
- The number of nodes in both trees is in the range `[0, 100]`.
- `-104 <= Node.val <= 104`

#### **Solutions**
Check the code.

#### Code 
- **JavaScript**
  ```JavaScript
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
        if (p === null && q === null) return true;
        if (p === null || q === null) return false;
        if (p.val === q.val) {
            return (
                this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
            );
        }
    }
  ```

### Symmetric Tree
> Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

**Example:**
```
Input: root = [1,2,2,3,4,4,3]
Output: true

Input: root = [1,2,2,null,3,null,3]
Output: false
```
**Constraints:**
- The number of nodes in the tree is in the range `[1, 1000]`.
- `-100 <= Node.val <= 100`

**Follow up**: Could you solve it both recursively and iteratively?

#### **Solutions**
Check the  code.
#### Code
- **JavaScript**
  ```JavaScript
    var isSymmetric = function(root) {
        function recursiveCheck(left, right) {
                if(left === right) return true;
                if (!left || !right) return false;
                if (left.val !== right.val) return false;
                return recursiveCheck(left.left, right.right) && recursiveCheck(left.right, right.left);
        }
        return recursiveCheck(root.left, root.right);
    };

  ```

### Maximum Depth of Binary Tree
> Given the `root` of a binary tree, return its maximum depth;  
> a  binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Example:**
```
Input: root = [3,9,20,null,null,15,7]
Output: 3

Input: root = [1,null,2]
Output: 2
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 104]`.
- `-100 <= Node.val <= 100`

#### **Solutions**
Don't use the extra space to declare a recursive function to implement the traversal feature.Check the code. And always use this though to solve the "Maximum" question in recursive structure.

#### Code
- JavaScript
    ```javascript
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
    var maxDepth = function(root) {
        let depth = 0;
        if (!root || root.val === null) return depth;
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    };
    ```

### Convert Sorted Array to Binary Search Tree
> Given an integer array `nums` where the elements are sorted in **ascending order**, convert it to a **height-balanced** binary search tree. A height-balanced binary tree is a binary tree in which the depth of the two subtree of every node nerve differs by more than one.

**Example**
```
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
```

**Constraints**
- `1 <= nums.length <= 104`
- `-104 <= nums[i] <= 104`
- nums is sorted in a **strictly increasing** order.

#### **Solutions**
Check the code. And check what is the Binary Search Tree(BST).

#### Code
- **JavaScript**
  ```javascript
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
  
  ```

### Balanced Binary Tree
> Given a binary tree, determine if it is height-balanced.  
> For this problem, a height-balanced binary tree is defined as:  
> a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

**Example:**
```
Input: root = [3,9,20,null,null,15,7]
Output: true

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Input: root = []
Output: true
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 5000]`.
- `-104 <= Node.val <= 104`

#### **Solutions**
Check the code. Keep the `Bottom Up` way in mind.

#### Code
- **JavaScript**
  ```JavaScript
  function isBalanced(root) {
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
    const getDepth = (root) => {
      if (root === null) return 0;
      return Math.max(getDepth(root.left), getDepth(root.right) + 1);
    };
    if (root === null) return true;
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    return (
      Math.abs(leftDepth - rightDepth) <= 1 &&
      this.isBalanced(root.left) &&
      this.isBalanced(root.right)
    );

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
  ```

### Minimum Depth of Binary Tree
> Given a binary tree, find its minimum depth.  
> The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.  
> **Note**: A leaf is a node with no children.

**Example:**
```
Input: root = [3,9,20,null,null,15,7]
Output: 2

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 105]`.
- `-1000 <= Node.val <= 1000`

#### **Solutions**
Check the code.

#### Code
- **JavaScript**
  ```JavaScript
  function minDepth(root) {
    if (root === null) return 0;
    const left = minDepth(root.left);
    const right = minDepth(root.right);
    return left === 0 || right === 0
      ? Math.max(left, right) + 1
      : Math.min(left, right) + 1;
  }
  ```

### Path Sum
> Given the root of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`.  
> A **leaf** is a node with no children.

**Example:**
```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.

Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.

Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 5000]`.
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`

#### **Solutions**
Check the code.

#### Code
- **JavaScript**
  ```javascript
    hasPathSum(root, targetSum) {
    if (root === null) return false;
    if (root.left === null && root.right === null && targetSum - root.val === 0)
      return true;
    return (
      this.hasPathSum(root.left, targetSum - root.val) ||
      this.hasPathSum(root.right, targetSum - root.val)
    );
  }
  ```


