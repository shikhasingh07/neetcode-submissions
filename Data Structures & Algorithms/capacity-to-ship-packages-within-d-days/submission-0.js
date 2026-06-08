class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    canDo = (weights, cap, days) => {
        let max = 1,
            load = 0;
        for (const weight of weights) {
            if (load + weight > cap) {
                max++;
                load = 0;
            }
            load += weight;
        }
        return max <= days;
    };
    shipWithinDays(weights, days) {
        let lo = Math.max(...weights),
            hi = weights.reduce((a, b) => a + b, 0);

        while (lo < hi) {
            let mid = Math.floor((lo + hi) / 2);

            if (this.canDo(weights, mid, days)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return hi;
    }
}
