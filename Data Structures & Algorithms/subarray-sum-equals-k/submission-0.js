class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
          let map = {};
  let pre = 0;
  map[0] = 1;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    pre += nums[i];
    if (map[pre - k]) {
      count += map[pre - k];
    }
    map[pre] = (map[pre] || 0) + 1;
  }
  return count;
    }
}
