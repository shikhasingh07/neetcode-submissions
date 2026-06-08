class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
          let count = 0; 
    let candid = null; 

    for(let n of nums){
        if(count === 0){
            candid = n;
        }

        count += (n === candid) ? 1 : -1;
    }

    return candid;
    }
}
