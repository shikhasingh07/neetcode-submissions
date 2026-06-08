class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let len = Math.min(word1.length, word2.length);
        let str = 0;
        let ans = "";
        while (str < len) {
            ans += word1[str];
            ans += word2[str];
            str++;
        }

        ans += word1.slice(len);
        ans += word2.slice(len);
       
       return ans;
    }
}
