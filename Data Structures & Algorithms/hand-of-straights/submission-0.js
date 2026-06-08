class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        hand.sort((a, b) => a - b);
  let map = {};
  for (let item in hand) {
    map[hand[item]] = (map[hand[item]] || 0) + 1;
  }
  
  let isTrue = false;
  for(let i = 0 ; i < hand.length ; i++){
    if(map[hand[i]] === 0) continue;
    
    for(let j = 0 ; j <groupSize ; j++){
        if(!map[hand[i] + j])return false;
        map[hand[i] + j]--;
    }
  }
  return true;
    }
}
