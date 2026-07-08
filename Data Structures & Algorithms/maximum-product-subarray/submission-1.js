class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    dp(nums, i) {
        let maxProd = nums[0];
        let minProd = nums[0];
        let best = nums[0];

        for (let i = 1; i < nums.length; i++) {
            let max = Math.max(nums[i], maxProd * nums[i], minProd * nums[i]);
            let min = Math.min(nums[i], maxProd * nums[i], minProd * nums[i]);
            best = Math.max(best, max);

            maxProd = max;
            minProd = min;
        }

        return best;
    }
    maxProduct(nums) {
        return this.dp(nums, 0, new Array(nums.length).fill(-1));
    }
}
