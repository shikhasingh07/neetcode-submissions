class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    dfs(graph, visit, node, parent) {
  if (visit.has(node)) {
    return true;
  }

  visit.add(node);

  for (let neigh of graph[node]) {
    if (!visit.has(neigh)) {
      if (!this.dfs(graph, visit, neigh, node)) {
        return false;
      }
    } else if (neigh !== parent) {
      return false;
    }
  }
  return true;
}
    validTree(n, edges) {
if (edges.length !== n - 1) return false;
  let graph = Array.from({ length: n }, () => []);
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  let visit = new Set();
  if (!this.dfs(graph, visit, 0, -1)) {
    return false;
  }
  return visit.size === n;

    }
}
