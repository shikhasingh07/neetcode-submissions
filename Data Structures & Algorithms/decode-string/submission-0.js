class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
           let count = 0;
  let current = "";
  const countStack = [];
  const strStack = [];

  for (let item of s) {
    if (!isNaN(item)) {
      count = count * 10 + Number(item);
    } else if (item === "[") {
      countStack.push(count);
      strStack.push(current);
      count = 0;
      current = "";
    } else if (item === "]") {
      const cnt = countStack.pop();
      const prev = strStack.pop();
      current = prev + current.repeat(cnt);
    } else {
        current += item;
    }
  }
  return current;
    }
}
