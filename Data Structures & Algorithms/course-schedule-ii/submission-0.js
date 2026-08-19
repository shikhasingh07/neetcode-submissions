class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    dfs(node, list, state, result) {
        if (state[node] === 1) return true;

        if (state[node] === 2) return false;

        state[node] = 1;
        for (let neigbhor of list[node]) {
            if (this.dfs(neigbhor, list, state, result)) {
                return true;
            }
        }
        state[node] = 2;
        result.push(node);
        return false;
    }
    findOrder(numCourses, prerequisites) {
        let list = Array.from({ length: numCourses }, () => []);

        for (let [u, v] of prerequisites) {
            list[v].push(u);
        }

        let state = new Array(numCourses).fill(0);

        let result = [];
        for (let i = 0; i < numCourses; i++) {
            if (this.dfs(i, list, state, result)) return [];
        }

        return result.reverse();
    }
}
