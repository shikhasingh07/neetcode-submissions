class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    result(n, idx, current, ans, k) {
        if (current.length === k) {
            ans.push([...current]);
            return ans;
        }

        for (let i = idx; i < n; i++) {
            if (n === 0) {
                return;
            }

            current.push(i + 1);
            this.result(n, i + 1, current, ans, k);
            current.pop();
        }
    }
    combine(n, k) {
        let ans = [];
        this.result(n, 0, [], ans, k);
        return ans;
    }
}
