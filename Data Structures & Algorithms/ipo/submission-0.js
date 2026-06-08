class maxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        let parent = Math.floor((idx - 1) / 2);
        while (idx > 0 && this.heap[idx] > this.heap[parent]) {
            [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];
            idx = parent;
            parent = Math.floor((idx - 1) / 2);
        }
    }

    bubbleDown() {
        let idx = 0;
        let len = this.size();

        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;

            let smallest = idx;

            if (left < len && this.heap[left] > this.heap[smallest]) {
                smallest = left;
            }
            if (right < len && this.heap[right] > this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === idx) break;
            if (smallest !== idx) {
                [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
                idx = smallest;
            }
        }
    }

    remove() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }
}

class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        let projects = [];
        for (let i = 0; i < profits.length; i++) {
            projects.push([capital[i], profits[i]]);
        }
        // capital ke basis pe sort
        projects.sort((a, b) => a[0] - b[0]);

        let heap = new maxHeap(),
            j = 0;
        for (let i = 0; i < k; i++) {
            while (j < projects.length && projects[j][0] <= w) {
                heap.insert(projects[j][1]);
                j++;
            }
            w += heap.remove();
        }

        return w;
    }
}
