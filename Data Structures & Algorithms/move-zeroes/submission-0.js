class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let s = 0,
    f = 0;

  while (f < nums.length) {
    if (nums[f] !== 0) {
      nums[s] = nums[f];
      s++;
    }
    f++;
  }

  while (s < nums.length) {
    nums[s] = 0;
    s++;
  }
    }
}
