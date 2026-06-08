class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let map = {};

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let num of nums) {
    if (map[num] === 1) {
      return num;
    }
  }

  return -1;
    }
}
