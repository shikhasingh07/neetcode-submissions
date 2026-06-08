class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
         let sum = 0,
    result = 0,
    left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      result =
        result === 0 ? right - left + 1 : Math.min(result, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return result;
    }
}
