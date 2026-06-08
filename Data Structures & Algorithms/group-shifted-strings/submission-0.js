class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    groupStrings(strings) {
        let map = {};
  for (let i of strings) {
    if (i.length === 1) {
      map["single"] = map["single"] || [];
      map["single"].push(i);
      continue;
    }

    let key = [];

    for (let j = 1; j < i.length; j++) {
      let diff = (i.charCodeAt(j) - i.charCodeAt(j - 1) + 26) % 26;
      key.push(diff);
    }

    key = key.join("#");
    if (!map[key]) map[key] = [];
    map[key].push(i);
  }
  return Object.values(map);
    }
}
