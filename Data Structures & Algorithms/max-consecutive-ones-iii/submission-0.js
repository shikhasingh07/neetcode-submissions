class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let left = 0;
  let result = 0;
  let count = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) count++;

    while (count > k) {
      if (nums[left] === 0) {
        count--;
      }
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
    }
}
