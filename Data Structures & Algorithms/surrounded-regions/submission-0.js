class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    dfs(board, i, j, visit) {
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;
        if (board[i][j] !== "O") return;
        board[i][j] = "S";
        this.dfs(board, i + 1, j, visit);
        this.dfs(board, i - 1, j, visit);
        this.dfs(board, i, j + 1, visit);
        this.dfs(board, i, j - 1, visit);
    }
    solve(board) {
        let row = board.length,
            col = board[0].length;
        let visit = new Set();
        for (let j = 0; j < col; j++) this.dfs(board, 0, j, visit); // top
        for (let j = 0; j < col; j++) this.dfs(board, row - 1, j, visit); // bottom
        for (let i = 0; i < row; i++) this.dfs(board, i, 0, visit); // left
        for (let i = 0; i < row; i++) this.dfs(board, i, col - 1, visit); // right

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === "S") {
                    board[i][j] = "O";
                } else if (board[i][j] === "O") {
                    board[i][j] = "X";
                }
            }
        }

        return board;
    }
}
