class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    maximumOddBinaryNumber(s) {
          let ones = 0, zeros = 0;
    s.split('').forEach(element => {
        element === '0' ? zeros ++ : ones++;
    });
    return '1'.repeat(ones - 1) + '0'.repeat(zeros) + '1';
    }
}
