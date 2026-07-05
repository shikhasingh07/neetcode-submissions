class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    dp(grid, i, j, arr) {
        if (i < 0 || j < 0) return Infinity;
        if (i === 0 && j === 0) return grid[0][0];
        if (arr[i][j] !== -1) return arr[i][j];

        arr[i][j] = grid[i][j] + Math.min(this.dp(grid, i - 1, j, arr), this.dp(grid, i, j - 1, arr));
        return arr[i][j];
    }
    minPathSum(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let memo = new Array(m).fill(null).map(() => new Array(n).fill(-1));

        return this.dp(grid, m - 1, n - 1, memo);
    }
}
