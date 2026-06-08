class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g, s) {
         let i = 0 ; 
    let j = 0; 

    g.sort((a,b) => a-b); 
    s.sort((a,b) => a-b)
    

    while (i < g.length && j < s.length){
        if(g[i] <= s[j]){
            i++; 
        }
        j++;  
    }

    return i; 
    }
}
