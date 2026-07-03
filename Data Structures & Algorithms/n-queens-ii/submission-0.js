class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    backTracking(n, idx, current, visited, drag, drag2) {
    if (idx === n) {
        return 1;
    }

    let count = 0;
    for (let col = 0; col < n; col++) {
        let d1 = idx - col + (n - 1);
        let d2 = idx + col;

        if (visited[col]) continue;

        if (drag[d1]) continue;

        if (drag2[d2]) continue;

        visited[col] = true;
        drag[d1] = true;
        drag2[d2] = true;
        current.push(col);
        count += this.backTracking(n, idx + 1, current, visited, drag, drag2);
        current.pop();
        visited[col] = false;
        drag[d1] = false;
        drag2[d2] = false;
    }
    return count
}
    totalNQueens(n) {
          let visited = new Array(n).fill(false);
    let drag = new Array(2 * n - 1).fill(false);
    let drag2 = new Array(2 * n - 1).fill(false);

    return this.backTracking(n, 0, [], visited, drag, drag2);
    }
}
