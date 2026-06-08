class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
  let set = new Set(nums);
  for (let num = 1; num <= nums.length; num++) {
    if (!set.has(num)) {
      return num;
    }
  }
  return nums.length + 1;

    }
}
