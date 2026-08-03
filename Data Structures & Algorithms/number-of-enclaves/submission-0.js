class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
    if (grid[i][j] !== 1) return;
    grid[i][j] = 0;
    this.dfs(grid, i + 1, j); this.dfs(grid, i - 1, j);
    this.dfs(grid, i, j + 1); this.dfs(grid, i, j - 1);
} 
    numEnclaves(grid) {
         let rows = grid.length, cols = grid[0].length;
    
    for (let j = 0; j < cols; j++) {
        if (grid[0][j] === 1) this.dfs(grid, 0, j);
        if (grid[rows - 1][j] === 1) this.dfs(grid, rows - 1, j);
    }
    for (let i = 0; i < rows; i++) {
        if (grid[i][0] === 1) this.dfs(grid, i, 0);
        if (grid[i][cols - 1] === 1) this.dfs(grid, i, cols - 1);
    }

    let count = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) count++;
        }
    }
    return count;
    }
}
