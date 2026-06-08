class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       

  let stack = [];

  for (let item of s) {
    if (item === "{" || item === "[" || item === "(") {
      stack.push(item);
    } else if (
      (item === "}" && stack.pop() !== "{") ||
      (item === "]" && stack.pop() !== "[") ||
      (item === ")" && stack.pop() !== "(")
    ) {
      return false;
    }
  }
  return stack.length === 0;
}
    
}
