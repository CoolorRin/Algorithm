class Solution {
    constructor() {

    }

    twoSum(nums, target) {
        let hashMap = [];
        for (const [key, value] of Object.entries(nums)) {
            if (hashMap[target - value]) {
                return [key, hashMap[target - value]];
            }
            else hashMap[value] = key;
        }
    }

    isPalindrome(number) {
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

}
// Test 
const testSolution = new Solution()