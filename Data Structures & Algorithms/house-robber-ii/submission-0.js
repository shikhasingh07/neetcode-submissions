class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    dp(nums, idx, n, arr) {
        if (n < 0) return 0;
        if (n < idx) return 0;
        if (n === idx) return nums[idx];

        if (arr[n] !== -1) return arr[n];

        let take = this.dp(nums, idx, n - 2, arr) + nums[n];
        let skip = this.dp(nums, idx, n - 1, arr);

        arr[n] = Math.max(take, skip);
        return arr[n];
    }
    rob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];

        return Math.max(
            this.dp(nums, 1, nums.length - 1, new Array(nums.length).fill(-1)),
            this.dp(nums, 0, nums.length - 2, new Array(nums.length).fill(-1)),
        );
    }
}
