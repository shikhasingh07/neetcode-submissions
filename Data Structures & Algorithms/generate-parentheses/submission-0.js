class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    result(n, open, close, current, ans) {
        if (current.length === 2 * n) {
            ans.push(current);
            return ans;
        }

        if (open < n) {
            this.result(n, open + 1, close, current + "(", ans);
        }

        if (close < open) {
            this.result(n, open, close + 1, current + ")", ans);
        }
    }
    generateParenthesis(n) {
        let ans = [];
        this.result(n, 0, 0, "", ans);
        return ans;
    }
}
