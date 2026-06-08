class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
           let j = 0;
  let max = 0;

  for (let i of nums) {
    if (i === 1) {
      j++;
      if (j > max) {
        max = j;
      }
    } else {
      j = 0;
    }
  }

  return max;
    }
}
