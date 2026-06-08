class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums, k) {
        let product = 1,
    result = 0,
    left = 0;
  if (k <= 1) return 0;  
  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    result += right - left + 1;
  }
  return result;
    }
}
