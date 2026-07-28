class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let hold = -prices[0]; // buy kiya → profit ghata
    let cash = 0;

    for (let i = 1; i < prices.length; i++) {
        let newHold = Math.max(hold, cash - prices[i]);
        let newCash = Math.max(cash, hold + prices[i]);
        hold = newHold;
        cash = newCash;
    }

   return cash;
    }
}
