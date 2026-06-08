class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    check = (s, left, right) => {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };
    validPalindrome(s) {
        let left = 0,
            right = s.length - 1;

        while (left < right) {
            if (s[left] !== s[right]) {
                return this.check(s, left + 1, right) || this.check(s, left, right - 1);
            }

            left++;
            right--;
        }

        return true;
    }
}
