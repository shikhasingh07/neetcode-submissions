class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    atMost = function (nums, k) {
    let left = 0;

    let ans = 0;
    let map = new Map();
    let dis = 0;
    for (let right = 0; right < nums.length; right++) {
        let x = nums[right];
        map.set(x, (map.get(x) || 0) + 1);

        while (map.size > k) {
            let y = nums[left];
            map.set(y, map.get(y) - 1);
            if (map.get(y) === 0) {
                map.delete(y)
            }

            left++;
        }

        ans += right - left + 1;
    }

    return ans;
};

    subarraysWithKDistinct(nums, k) {
         return this.atMost(nums, k) - this.atMost(nums, k - 1);
    }
}
