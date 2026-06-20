class WordDictionary {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this;

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new WordDictionary();
            }
            node = node.children[char];
        }

        node.isEnd = true;
    }

    dfs(node, i, word) {
        if (i === word.length) return node.isEnd;

        let char = word[i];
        if (char === ".") {
            for (let child of Object.values(node.children)) {
                if (this.dfs(child, i + 1, word)) return true;
            }
            return false;
        }
        if (!node.children[char]) return false;
        return this.dfs(node.children[char], i + 1, word);
    }
    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
       return this.dfs(this, 0, word);  
    }
}
