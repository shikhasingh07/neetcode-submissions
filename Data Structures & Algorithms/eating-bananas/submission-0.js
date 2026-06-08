class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    canDo(piles, k, h) {
    let hours = 0;
    for (let pile of piles) {
        hours += Math.ceil(pile/k);
    }
    return hours <= h;
}
    minEatingSpeed(piles, h) {
        let lo = 1 , hi = Math.max(...piles); 
    while(lo < hi){
        let mid = Math.floor((lo + hi) / 2); 

        if(this.canDo(piles,mid,h)){
            hi = mid; 
        }else {
            lo = mid + 1; 
        }
    }
    return lo;
    }
}
