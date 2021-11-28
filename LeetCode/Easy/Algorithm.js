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
    };

    LCP(strs) {
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
}
// Test 
const testSolution = new Solution()
const result = testSolution.LCP(["flower", "flow", "flight"])
console.log(result);