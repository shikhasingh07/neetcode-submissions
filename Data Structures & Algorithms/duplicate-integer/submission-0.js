class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        console.log(nums,new Set(nums),new Set(nums).length ,nums.length);
        return new Set(nums).size !== nums.length;
    }
}
