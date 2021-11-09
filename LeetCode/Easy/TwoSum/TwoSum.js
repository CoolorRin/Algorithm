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