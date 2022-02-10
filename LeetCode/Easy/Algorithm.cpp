#include "vector"
#include "iostream"
#include "map"

struct ListNode
{
    // Merge Two Sorted Lists
    // Definition for singly-linked list.
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
    std::vector<int> twoSum(std::vector<int> &nums, int target)
    {
        std::map<int, int> valueMap;
        std::vector<int> result = {};
        for (int index = 0; index < nums.size(); index++)
        {
            if (valueMap.find(target - int(nums[index])) != valueMap.end())
            {
                result.push_back(index);
                result.push_back(valueMap[target - int(nums[index])]);
                break;
            }
            else
            {
                valueMap.insert({int(nums[index]), index});
            }
        }
        return result;
    }

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
        return sum;
    }

    std::string LCP(std::vector<std::string> strs)
    {
        /* RunTimeError In LeetCode => (Heep overflow)
        if (strs.size() == 0)
            return "";
        std::string lcp = strs[0];
        for (int vectorIndex = 1; vectorIndex < int(strs.size()); vectorIndex++)
        {
            int strIndex = 0;
            while (lcp[strIndex] == strs[vectorIndex][strIndex])
            {
                strIndex++;
            }
            lcp = lcp.substr(0, strIndex);
        }
        return lcp;
        */

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
};

int main(int argc, char const *argv[])
{
    Solution s;

    // TwoSum
    //  std::vector<int> nums = {2, 7, 11, 15};
    //  std::vector<int> result;
    //  int target = 9;
    //  result = s.twoSum(nums, target);

    // isPalindrome

    return 0;
}
