class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
         let map = {};
    for(let item of tasks){
        map[item] = (map[item] || 0) + 1; 
    }

    let max = -Infinity , maxCount = 0 , slots = 1;
    for(let item of tasks){
      max = Math.max(max, map[item]);
    }

    for(let item of Object.keys(map)){
        if(max === map[item]){
            maxCount ++;
        }
    }

    slots = (max - 1) * (n + 1) + maxCount;
    return Math.max(slots,tasks.length);
    }
}
