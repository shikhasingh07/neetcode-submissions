class PrefixTree {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this;

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new PrefixTree();
            }
            node = node.children[char];
        }

        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}
