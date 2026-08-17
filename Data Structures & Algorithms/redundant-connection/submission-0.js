class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    dfs(u, v, list, visit) {
        if (u === v) {
            return true;
        }

        visit.add(u);

        for (let neigh of list[u]) {
            if (!visit.has(neigh) && this.dfs(neigh, v, list, visit)) return true;
        }
    }
    findRedundantConnection(edges) {
        let list = Array.from({ length: edges.length + 1 }, () => []);

        for (let [u, v] of edges) {
            let visit = new Set();

            if (this.dfs(u, v, list, visit)) return [u, v];
            list[u].push(v);
            list[v].push(u);
        }
    }
}
