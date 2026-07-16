class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    dp(stones, item, arr) {
    arr[0] = true;

    for (let num of stones) {
        for (let i = item; i >= num; i--) {
            arr[i] = arr[i] || arr[i - num];
        }
    }
    for (let i = item; i >= 0; i--) {
        if (arr[i]) return i;
    }

    return arr;
}
    lastStoneWeightII(stones) {
         let total = stones.reduce((item, prev) => item + prev);
    let item = Math.floor(total / 2);
    let max = -1;
    let returnedMax = this.dp(stones, item, new Array(item + 1).fill(false), max);

    return total - 2 * returnedMax;
    }
}
