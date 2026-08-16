/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    dfs(node, visit) {
   if(visit.has(node)) return visit.get(node);
   let clone = new Node(node.val);
   visit.set(node, clone);
   for (let neighbor of node.neighbors){
    clone.neighbors.push(this.dfs(neighbor, visit));
   }
   return clone
}
    cloneGraph(node) {
        if (!node) return null;
    let cloneMap = new Map();
    return this.dfs(node, cloneMap);
    }
}
