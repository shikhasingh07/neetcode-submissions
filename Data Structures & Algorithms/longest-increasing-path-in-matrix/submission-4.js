class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */

    longestIncreasingPath(matrix) {
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        const ROWS = matrix.length,
            COLS = matrix[0].length;

        let dp = Array.from({ length: ROWS }, () => Array(COLS).fill(-1));

        function dfs(r, c, prevVal) {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || matrix[r][c] <= prevVal) {
                return 0;
            }
            if (dp[r][c] !== -1) return dp[r][c];
            let res = 1;
            for (let d of directions) {
                res = Math.max(res, 1 + dfs(r + d[0], c + d[1], matrix[r][c]));
            }
            dp[r][c] = res;
            return res;
        }
        let max = 0;
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                max = Math.max(max, dfs(i, j, -Infinity));
            }
        }

        return max;
    }
}
