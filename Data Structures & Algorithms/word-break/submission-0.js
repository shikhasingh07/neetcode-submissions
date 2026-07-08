class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
     dp(s, dict, idx, arr) {
  arr[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] === true && dict.has(s.slice(j, i))) {
        arr[i] = true;
      }
    }
  }
  return arr[s.length];
}

    wordBreak(s, wordDict) {
         const wordSet = new Set(wordDict);
  return this.dp(s, wordSet, 0, new Array(s.length + 1).fill(false));
    }
}
