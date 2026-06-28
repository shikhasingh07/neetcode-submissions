class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    result(nums, n, idx, current, ans) {
        ans.push([...current]);

        for (let i = idx; i < n; i++) {
            if (i > idx && nums[i] === nums[i - 1]) continue;

            current.push(nums[i]);
            this.result(nums, n, i + 1, current, ans);
            current.pop();
        }
    }
    subsetsWithDup(nums) {
        let ans = [];
        this.result(
            nums.sort((a, b) => a - b),
            nums.length,
            0,
            [],
            ans,
        );
        return ans;
    }
}
