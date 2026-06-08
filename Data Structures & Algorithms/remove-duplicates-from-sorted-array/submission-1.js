class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
         let s = 0,
    f = 1;
  while (f <= nums.length - 1) {
    if (nums[s] !== nums[f]) {
      s++;
      nums[s] = nums[f];
    }
    f++;
  }
  return s + 1;
    }
}
