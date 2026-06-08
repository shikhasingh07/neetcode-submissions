class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
        let calm = 0;
  let windowSum = 0;
  let maxWindow = 0;
  for (let index = 0; index < customers.length; index++) {
    if (grumpy[index] === 0) calm += customers[index];

    if (grumpy[index] === 1) windowSum += customers[index];

    //    here deleting last ele
    if (index >= minutes) {
      if (grumpy[index - minutes] === 1) {
        windowSum -= customers[index - minutes];
      }
    }
    maxWindow = Math.max(maxWindow, windowSum);
  }

  return calm + maxWindow;
    }
}
