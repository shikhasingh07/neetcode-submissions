class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    dp(nums, n, arr) {
        if (n < 0) return 0;
        if (n === 0) return nums[0];

        if (arr[n] !== -1) return arr[n];

        let take = this.dp(nums, n - 2, arr) + nums[n];
        let skip = this.dp(nums, n - 1, arr);

        arr[n] = Math.max(take, skip);
        return arr[n];
    }
    rob(nums) {
        return this.dp(nums, nums.length - 1, new Array(nums.length).fill(-1));
    }
}
