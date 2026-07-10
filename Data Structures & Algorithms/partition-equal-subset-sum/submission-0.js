class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    dp(nums, total, dp) {
        dp[0] = true;

        for (let num of nums) {
            for (let i = total; i >= num; i--) {
                dp[i] = dp[i] || dp[i - num];
            }
        }
        return dp[total];
    }
    canPartition(nums) {
        const total = nums.reduce((arr, item) => arr + item);
        if (total % 2 !== 0) return false;

        const target = total / 2;

        return this.dp(nums, target, new Array(target + 1).fill(false));
    }
}
