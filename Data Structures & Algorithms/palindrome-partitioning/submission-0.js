class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    isPal(str) {
        let l = 0;
        let r = str.length - 1;

        while (l < r) {
            if (str[l] !== str[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
    result(s, n, idx, current, ans) {
        if (idx === s.length) {
            ans.push([...current]);
            return ans;
        }

        for (let i = idx; i < n; i++) {
            let parts = s.substring(idx, i + 1);

            if (this.isPal(parts)) {
                current.push(parts);
                this.result(s, n, i + 1, current, ans);
                current.pop();
            }
        }
    }

    partition(s) {
        let ans = [];
        this.result(s, s.length, 0, [], ans);
        return ans;
    }
}
