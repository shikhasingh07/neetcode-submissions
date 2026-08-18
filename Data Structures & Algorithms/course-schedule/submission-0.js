class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
     dfs(node, state, list) {

    if (state[node] === 1) return true;

    if (state[node] === 2) return;

    state[node] = 1;

    for (let neighbors of list[node]) {
        if (this.dfs(neighbors, state, list)) return true;
    }

    state[node] = 2
}
    canFinish(numCourses, prerequisites) {
        let list = Array.from({ length: numCourses }, () => []);

        for (let [u, v] of prerequisites) {
            list[u].push(v);
        }

        let state = new Array(numCourses).fill(0);

        for (let i = 0; i < numCourses; i++) {
            if (this.dfs(i, state, list)) return false;
        }
        return true;
    }
}
