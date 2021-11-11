# Easy Question

## Two Sum
  > Given an array of intergers `nums` and an integer `target` , return indices of the two nomers such that they add up to `target`,<br/>
  <br/>You may assume thar each input world have **exactly one solution**, and you may not use the same elemen twice.<br/>
  <br/>You can return the answer in any order.<br/>

  Example:
  ```
  Input: nums = [3, 2, 4], target = 6;
  Output: [1,2];
  ```

 **Solution:**

 **Use the hashmap to make the Algorithm that is less than `O(n^2)` time complexity.**

 -  As the example above, we get the array `[3, 2, 4]` and loop all element in array. Each loop will finded the value which is the target minus the value in the array is in the hashMap or not. If not, push element and the index to the `Hashmap` as its key, value and continue the loop.

**JavaScript**

```javascript
function twoSum(nums, target) {
    let hashMap = [];
    for (const [key, value] of Object.entries(nums)) {
        if (hashMap[target - value]) {
            return [key,  hashMap[target - value]];
        }
        else hashMap[value] = key;
    }
}

// Test 
console.log(twoSum([3,3], 6))
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
- Convert the `Number` to `String` to  make the parameter is iterable and find out **Is the First Number same as the last one, and so on.**   

- Keep in mind that cut the Number in half, revert the behind part it will the same as the front part. So, use the **Remainder Operator** to get the last one number from the given parameter. And remove it from the parameter and compare with the reverted num untill the given number is less or equl the reverted number.**Each loop (the Initialized of reverted num will be 0) the reverted number will times the 10 and plus the last number of the current parameter.**

**JavaScript**
```JavaScript
var isPalindrome = function(x) {
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