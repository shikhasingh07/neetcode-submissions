class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > count) {
      return false;
    }
    count = Math.max(count , i + nums[i]);
  }

  return true;
    }
}
