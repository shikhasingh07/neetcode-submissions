class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    result(candidate, n, idx, current, ans, target) {
        if (target === 0) {
            ans.push([...current]);
            return ans;
        }
        if (target < 0 || idx === n) {
            return [];
        }

        current.push(candidate[idx]);
        this.result(candidate, n, idx, current, ans, target - candidate[idx]);
        current.pop();
        this.result(candidate, n, idx + 1, current, ans, target);
    }
    combinationSum(nums, target) {
        let ans = [];
        this.result(nums, nums.length, 0, [], ans, target);
        return ans;
    }
}
