class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         let map = {};

  for (let st of strs) {
    let split = st.split("").sort().join("#");

    if (!map[split]) map[split] = [];
    map[split].push(st);
  }
  return Object.values(map);
    }
}
