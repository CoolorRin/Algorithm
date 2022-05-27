# Easy Question

## Two Sum

> Given an array of intergers `nums` and an integer `target` , return indices of the two nomers such that they add up
> to `target`,<br/>
<br/>You may assume thar each input world have **exactly one solution**, and you may not use the same elemen twice.<br/>
<br/>You can return the answer in any order.<br/>

Example:

  ```
  Input: nums = [3, 2, 4], target = 6;
  Output: [1,2];
  ```

**Solution:**

- **Use the hashmap to make the Algorithm that is less than `O(n^2)` time complexity.**

  As the example above, we get the array `[3, 2, 4]` and loop all element in array. Each loop will finded the value
  which is the target minus the value in the array is in the hashMap or not. If not, push element and the index to
  the `Hashmap` as its key, value and continue the loop.

**JavaScript**

```javascript
function twoSum(nums, target) {
	let hashMap = [];
	for (const [key, value] of Object.entries(nums)) {
		if (hashMap[target - value]) {
			return [key, hashMap[target - value]];
		} else hashMap[value] = key;
	}
}

// Test 
console.log(twoSum([3, 3], 6))
```

**Cpp11**

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

## Palindrome Number

> Given an integer x, return true if x is palindrome integer.<br>
> <br>An integer is a palindrome when it reads the same backward as forward
> For example, 121 is palindrome while 123 is not.

**Example**:

```
Input: x = 121
Output: true
```

**Solution:**

- Convert the `Number` to `String` to make the parameter is iterable and find out **Is the First Number same as the last
  one, and so on.**

- Keep in mind that cut the Number in half, revert the behind part it will the same as the front part. So, use the **
  Remainder Operator** to get the last one number from the given parameter. And remove it from the parameter and compare
  with the reverted num untill the given number is less or equl the reverted number.**Each loop (the Initialized of
  reverted num will be 0) the reverted number will times the 10 and plus the last number of the current parameter.**

**JavaScript**

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

**Cpp11**

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

## Roman to Integer

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

**Solution**

- First thing come out from my mind is loop the whole RomanNumber String and compare with the next number. If the second
  number is bigger, it will be minus by the second number.Otherwise, plus it. **Problem is the lastest number should
  handle first. And no matter lasest number is,**
- `Or Maybe it have the better way`

**JavaScript**

```JavaScript
var transferRoman2Integer
(romanNumString)
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

**Cpp11**

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

## Longest Common Prefix(LCP)

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

**Solutions**

- Just scanning all strings
  > Horizontal Scanning: <br> `LCP(str1, str2, ...strN) = LCP(LCP(LCP(str1, str2), str3), ...strN)`. <br>
  > Vertical
  Scanning: <br> `LCP(str1, str2, ...strN) = LCP(LCP(LCP(char1))) => (Each loop complete will comparison next char with all other str)`
  . <br>Get first char thar loop all other string comparison the first, second and so on untill comparison failed. <br>
- Divide and conquer (**Recursion**)
  > See JavaScript code below.
- [Other Solution](https://leetcode.com/problems/longest-common-prefix/solution/)

**JavaScript**

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

**Cpp11**

```C++
    std::string LCP(std::vector<std::string> strs)
    {
        if (strs.empty())
            return "";
        std::string prefix = strs[0];
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

## Merge Two Sorted Lists

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

**Solutions**

- Check the code.

**JavaScript**

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

**Cpp11**

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

## Remove Duplicates from Sorted Array

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

**Solutions**

- Check the code.

**JavaScript**

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
