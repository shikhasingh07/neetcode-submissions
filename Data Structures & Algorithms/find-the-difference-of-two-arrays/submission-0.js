class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[][]}
     */
    findDifference(nums1, nums2) {
         let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  for (let num of nums2) {
    if (set1.has(num)) {
      set1.delete(num);
    }
  }

  for (let num of nums1) {
    if (set2.has(num)) {
      set2.delete(num);
    }
  }

  return [[...set1], [...set2]];
    }
}
