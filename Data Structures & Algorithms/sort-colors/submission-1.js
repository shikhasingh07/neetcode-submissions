class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
   swap(nums, low, right) {
  let num = nums[low];
  nums[low] = nums[right];
  nums[right] = num;
}
    sortColors(nums) {
        let low = 0,
        mid = 0,
        high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            this.swap(nums, low, mid);
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            this.swap(nums, mid, high);
            high--;
        }
    }
    return nums;
    }
}
