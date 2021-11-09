#include "vector"
#include "iostream"
#include "map"

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        std::map<int, int>valueMap;
        std::vector<int> result = {};
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

