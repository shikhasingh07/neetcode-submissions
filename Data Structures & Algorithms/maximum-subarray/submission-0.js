class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let total = -Infinity,
    cs = 0;
  for (let i = 0; i < nums.length; i++) {
    cs = Math.max(nums[i] , cs+nums[i]); 
    if(cs > total){
        total = cs; 
    }
  }
  return total
    }
}
