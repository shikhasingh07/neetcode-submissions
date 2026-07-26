class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let hold, sold, rest;

    hold = -prices[0]
    sold = 0
    rest = 0

    for (let i = 1; i < prices.length; i++) {
        let newHold = Math.max(hold, rest - prices[i]);
        let newSold = hold + prices[i];
        let newRest = Math.max(rest, sold);

        hold = newHold;
        sold = newSold;
        rest = newRest;
    }

    return Math.max(sold, rest);
    }
}
