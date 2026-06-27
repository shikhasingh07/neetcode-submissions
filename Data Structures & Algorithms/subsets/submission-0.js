class Solution {
    subset(nums, idx, n, ans, result) {
        if (idx === n) {
            result.push([...ans]);
            return ans;
        }

        this.subset(nums, idx + 1, n, ans, result);
        ans.push(nums[idx]);
        this.subset(nums, idx + 1, n, ans, result);
        ans.pop();
    }
    subsets = function (nums) {
        let result = [];
        this.subset(nums, 0, nums.length, [], result);
        return result;
    };
}
