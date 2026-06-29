class Solution {
    result(nums, n, idx, current, ans, used) {
        if (current.length === n) {
            ans.push([...current]);
            return ans;
        }

        for (let i = 0; i < n; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
            used[i] = true;
            current.push(nums[i]);
            this.result(nums, n, 0, current, ans, used);
            current.pop();
            used[i] = false;
        }
    }
    permuteUnique(nums) {
        let ans = [];
        let used = new Array(nums.length).fill(false);
        this.result(
            nums.sort((a, b) => a - b),
            nums.length,
            0,
            [],
            ans,
            used,
        );
        return ans;
    }
}
