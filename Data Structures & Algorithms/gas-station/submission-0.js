class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
          let total = 0,
    tank = 0,
    start = 0;

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    total += gas[i] - cost[i];

    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }
  }

  if (total < 0) {
    return -1;
  }
  return start;
    }
}
