class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    swap(nums, left, right) {
        let num = nums[left];
        nums[left] = nums[right];
        nums[right] = num;
    }

    sortArrayByParity(nums) {
        let left = 0,
            right = nums.length - 1;

        while (left <= right) {
            if (nums[left] % 2 === 0) {
                left++;
            } else if (nums[right] % 2 !== 0) {
                right--;
            } else {
                this.swap(nums, left, right);
                left++;
                right--;
            }
        }
        return nums;
    }
}
