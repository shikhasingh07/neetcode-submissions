class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        let left = 0 , right = people.length-1;
        let boat = 0; 
        while (left <= right){
          if(people[left] + people[right] <= limit){ 
            left ++; 
          }
           right--;
                 boat++;
        }
        return boat;
    }
}
