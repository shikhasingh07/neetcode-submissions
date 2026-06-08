class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
          let count = 0;
  let min = Infinity;
  for (let str = 0; str < blocks.length; str++) {
    if (blocks[str] === "W") {
      count += 1;
    }

    if (str >= k) {
      if (blocks[str - k] === "W") count -= 1;
    }
    if (str >= k - 1) {
      min = Math.min(min, count);
    }
  }
  return min;
    }
}
