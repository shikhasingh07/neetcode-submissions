class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        let set = new Set(nums1);

  let ans = new Set();

  for (let num of nums2) {
    if (set.has(num)) {
      ans.add(num);
    }
  }

  return [...ans];
    }
}
