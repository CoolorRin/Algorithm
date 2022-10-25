# Hard Question

## Waiting for classification

### (233) Number of Digit One
> Given an integer `n`, count the total number of digit `1` appearing in all non-negative integers less than or equal ot `n`.

**Example:**
```
Input: n = 13
Output: 6 (1, 10, 11, 12, 13)

Input: n = 0
Output: 0
```

**Constraints:**
- `0 <= n <= 10^9`

#### **Solutions:**
- Brute Force
  Loop all the number from `0` to the `n`, and analysis and One's, Ten's and Hundred's `1` of the loop target number.
- OH! It's Math my friend~~
  > [The reference from the LeetCode official solutions](https://leetcode.com/problems/number-of-digit-one/solutions/127744/number-of-digit-one/)
  Manually calculated the number of all the `1`s in `ones`, `tens`, `hundreds` places and so on of the digits.
  - `Ones` places:  `n / 10 + (n%10 !== 0)`
  - `Tens` places:  `n / 100 * 10 + Min(Max(n % 100 - 10[x10, x11, x12...x19] + 1[x10] , 0), 10)`
  - `Hundreds` places: `n / 1000 * 100 + Min(Max(n % 1000 - 100 + 1, 0), 100)`
  - and so on...
     
  

#### **Code**
- JavaScript
  ```javascript
  // Brute Force [Time Limited Exceeded]
  const countDigitOne = (num) => {
    let count = 0;
    for(let target = 1; target < num; loop++ ) {
      let tmp = target;
      while(tmp) {
        if( tmp % 10 === 1) count++;
        tmp /= 10;
      }
    }
  }

  // Math 
  const countDigitOne = (num) => {
    let count = 0;
    let places = 0;
    // loop all the places value of the digits
    let tmp = num;
    while (tmp) {
      places++;
      let number_of_one = 0;
      if (places === 1) {
        number_of_one = Math.floor(num / 10) + (num % 10 !== 0);
      } else {
        number_of_one =
          Math.floor(num / Math.pow(10, places)) +
          Math.min(
            Math.max(
              (num % Math.pow(10, places)) - Math.pow(10, places - 1) + 1,
              0
            ),
            10
          );
      }
      count += number_of_one;
      tmp = Math.floor(tmp / 10);
    }
    console.log(count);
    return count;
  };

  // Leetcode's solutions
  const countDigitOne = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i *= 10) {
      const divider = i * 10;
      count +=
        Math.floor(num / divider) * i +
        Math.min(Math.max((num % divider) - i + 1, 0), i);
      console.log(count);
    }

    return count;
  };
  ```