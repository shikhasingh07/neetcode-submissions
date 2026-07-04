class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    dp(cost, n, arr) {
        if (n <= 1) return 0;

        if (arr[n] !== null) return arr[n];

        arr[n] = Math.min(
            this.dp(cost, n - 1, arr) + cost[n - 1],
            this.dp(cost, n - 2, arr) + cost[n - 2],
        );

        return arr[n];
    }
    minCostClimbingStairs(cost) {
        return this.dp(cost, cost.length, new Array(cost.length + 1).fill(null));
    }
}
