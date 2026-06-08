class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let max = 0 ;
        let min = Number.MAX_VALUE; 

        for(let price of prices){

            if(min > price){
                min = price; 
            }

            let pro = price - min ; 

            if(max < pro){
                max = pro; 
            }
        }

        return max; 
    }
}
