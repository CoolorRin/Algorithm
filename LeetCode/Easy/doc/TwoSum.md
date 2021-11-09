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

**cpp**

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

