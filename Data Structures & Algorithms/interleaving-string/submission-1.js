class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    fnMemo(i, j, s1, s2, s3, memo) {
        if (i === s1.length && j === s2.length) return true;

        let k = i + j;
        if (k >= s3.length) {
            return false;
        }

        if (memo[i][j] !== -1) return memo[i][j];

        let item = false;
        if (s1[i] === s3[k]) {
            item = this.fnMemo(i + 1, j, s1, s2, s3, memo);
        }
        if (s2[j] === s3[k]) {
            item = item || this.fnMemo(i, j + 1, s1, s2, s3, memo);
        }
        memo[i][j] = item;
        return memo[i][j];
    }
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length !== s3.length) return false;
        let memo = new Array(s1.length + 1).fill(-1).map(() => new Array(s2.length + 1).fill(-1));
        return this.fnMemo(0, 0, s1, s2, s3, memo);
    }
}
