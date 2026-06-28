class Solution {
    result(nums, n, idx, current, ans, used) {
        if (current.length === n) {
            ans.push([...current]);
            return ans;
        }

        for (let i = 0; i < n; i++) {
            if (used[i]) continue;

            used[i] = true;
            current.push(nums[i]);
            this.result(nums, n, i + 1, current, ans, used);
            current.pop();
            used[i] = false;
        }
    }
    permute(nums) {
           let ans = [];
  let used = new Array(nums.length).fill(false);
  this.result(nums, nums.length, 0, [], ans, used);
  return ans;
    }
}
