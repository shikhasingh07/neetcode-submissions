class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
          let map = {};

  for (let i of nums) {
    map[i] = (map[i] || 0) + 1;
  }

  let ans = Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .slice(0, k);
  let number = ans.map((id) => Number(id));
  return number;
    }
}
