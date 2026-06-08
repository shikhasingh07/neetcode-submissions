class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
  let n = matrix[0].length;
  let lo = 0,
    hi = m * n - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let row = Math.floor(mid / n);
    let col = mid % n;

    if(matrix[row][col] === target){
      return true;
    }else if (matrix[row][col] > target){
      hi = mid - 1;
    }else{
      lo = mid + 1;
    }
  }
  return false;
    }
}
