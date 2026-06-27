class Solution {
    result(nums, idx, ans) {
        if (nums.length === idx) {
            return ans;
        }

        return this.result(nums, idx + 1, ans) + this.result(nums, idx + 1, ans ^ nums[idx]);
    }
    subsetXORSum = function (nums) {
        let idx = 0;
        let ans = 0;
        return this.result(nums, idx, ans);
    };
}
