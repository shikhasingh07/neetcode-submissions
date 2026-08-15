class Solution {
  dfs(node, isConnected, visit) {

    visit.add(node);
    
    for(let j = 0 ; j < isConnected[node].length ; j++){
        if(isConnected[node][j] && !visit.has(j)){
           this.dfs(j , isConnected , visit);
        }
    }
} 
findCircleNum = function(isConnected) {
      let n = isConnected.length;
    let visit = new Set();
    let provinces = 0;



    for (let i = 0; i < isConnected.length; i++) {

        if (!visit.has(i)) {
            this.dfs(i, isConnected, visit);
            provinces++;
        }

    }

    return provinces;
};
}
