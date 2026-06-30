class Solution {
    result(board, i, j, idx, word, visited) {
    if (idx === word.length) return true;

    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j] || board[i][j] !== word[idx]) {
       return false;
    }

    visited[i][j] = true;

    const found = this.result(board, i + 1, j, idx + 1, word, visited) ||
        this.result(board, i - 1, j, idx + 1, word, visited) ||
        this.result(board, i, j + 1, idx + 1, word, visited) ||
        this.result(board, i, j - 1, idx + 1, word, visited);
    visited[i][j] = false; // backtrack!
    return found;


}
    exist(board, word) {
        let rows = board.length;
        let cols = board[0].length;

        const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (board[i][j] === word[0]) {
                    if (this.result(board, i, j, 0, word, visited)) return true;
                }
            }
        }

        return false;
    }
}
