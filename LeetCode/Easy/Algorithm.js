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

    transferRoman2Integer(romanNumString) {
        const RomanMap = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }
        strLength = romanNumString.length
        let sum = RomanMap[romanNumString[strLength - 1]]
        for (const index = strLength - 2; index >= 0; index--) {
            if (RomanMap[romanNumString[index]] < RomanMap[romanNumString[index + 1]]) {
                sum -= RomanMap[romanNumString[index]]
            }
            else {
                sum += RomanMap[romanNumString[index]]
            }
        }
        return sum
    }

}
// Test 
const testSolution = new Solution()
const result = testSolution.transferRoman2Integer("III")
console.log(result);