class Solution {
  dfs(grid, i, j, visited) {

    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
    if (visited.has(`${i},${j}`) || grid[i][j] === '0') return;

    visited.add(`${i},${j}`);
    this.dfs(grid, i + 1, j, visited);
    this.dfs(grid, i - 1, j, visited);
    this.dfs(grid, i, j + 1, visited);
    this.dfs(grid, i, j - 1, visited);
}
 numIslands = function (grid) {
    let visited = new Set();
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1' && !visited.has(`${i},${j}`)) {
                count++;
                this.dfs(grid, i, j, visited);
            }
        }
    }

    return count;
};
}
