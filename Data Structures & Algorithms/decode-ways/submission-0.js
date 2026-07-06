class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    dp(s, n, idx, arr) {
        if (n === idx) {
            return 1;
        }

        if (s[idx] === "0") {
            return 0;
        }

        if (arr[idx] !== -1) return arr[idx]; // ✅

        let take = this.dp(s, n, idx + 1, arr);

        if (idx + 1 < n && (s[idx] === "1" || (s[idx] === "2" && s[idx + 1] <= "6"))) {
            take += this.dp(s, n, idx + 2, arr);
        }

        arr[idx] = take;
        return arr[idx];
    }
    numDecodings(s) {
        return this.dp(s, s.length, 0, new Array(s.length).fill(-1));
    }
}
