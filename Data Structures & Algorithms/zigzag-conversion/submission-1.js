class Solution {
    /**
     * @param {string} s
     * @param {number} numRows
     * @return {string}
     */
    convert(s, numRows) {
        if (numRows === 1) return s;
        let rows = Array(numRows).fill("");
        let curr = 0,
            dir = -1;
        for (let i of s) {
            rows[curr] += i;
            if (curr === 0 || curr === numRows - 1) dir *= -1;
            curr += dir;
        }
        return rows.join("");
    }
}
