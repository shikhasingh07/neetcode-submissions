class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    dp(nums, target, arr) {
    arr[0] = 1; // empty subset = 1 way to make sum 0

    for (let num of nums) {
        for (let i = target; i >= num; i--) { // backward — 0/1 knapsack
            arr[i] += arr[i - num];
        }
    }

    return arr[target];
}
    findTargetSumWays(nums, target) {
         const total = nums.reduce((arr, item) => arr + item);
    if ((total + target) % 2 !== 0) return 0; // P non-integer — impossible
    let P = (total + target) / 2;
    if (P < 0) return 0; // negative target — impossible

    return this.dp(nums, P, new Array(P + 1).fill(0));
    }
}
