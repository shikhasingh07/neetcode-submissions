class Solution {
    /**
     * @param {number[]} ratings
     * @return {number}
     */
    candy(ratings) {
        let ans = [];
        for (let i = 0; i < ratings.length; i++) {
            if (i === 0) {
                ans[0] = 1;
            } else if (ratings[i] > ratings[i - 1]) {
                ans[i] = ans[i - 1] + 1;
            } else {
                ans[i] = 1;
            }
        }

        for (let i = ratings.length - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                ans[i] = Math.max(ans[i], ans[i + 1] + 1);
            }
        }
        return ans.reduce((sum, c) => sum + c, 0);
    }
}
