class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    canDo(nums, cap, k) {
        let parts = 1,
            current = 0;
        for (let sum of nums) {
            if (current + sum > cap) {
                parts++;
                current = 0;
            }
            current += sum;
        }

        return parts <= k;
    }
    splitArray(nums, k) {
        let lo = Math.max(...nums), hi = nums.reduce((a, b) => a + b, 0);

    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);

        if (this.canDo(nums, mid, k)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
    }
}
