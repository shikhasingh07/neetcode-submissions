class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let map = {};
  let rowMap = {};
  let colMap = {};
  let boxMap = {};
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === ".") continue;
      let val = board[row][col];

      let box = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      let rKey = row + "-" + val;
      let cKey = col + "-" + val;
      let bKey = box + "-" + val;

      if (rowMap[rKey] || colMap[cKey] || boxMap[bKey]) {
        return false;
      }

      rowMap[rKey] = true;
      colMap[cKey] = true;
      boxMap[bKey] = true;
    }
  }
  return true;
    }
}
