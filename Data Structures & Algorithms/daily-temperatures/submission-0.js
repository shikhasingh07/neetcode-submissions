class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
  let ans = new Array(temperatures.length).fill(0)
  for (let idx = 0; idx < temperatures.length; idx++) {
    while (temperatures[idx] > temperatures[stack[stack.length - 1]]) {
      let top = stack[stack.length - 1];
      let popped = idx - top;
      ans[top] = popped;
      stack.pop();
    }
    stack.push(idx);
  }
  return ans;
    }
}
