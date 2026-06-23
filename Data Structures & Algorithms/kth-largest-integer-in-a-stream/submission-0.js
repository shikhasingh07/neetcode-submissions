class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = nums.sort((a, b) => a - b).slice(-k);
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
         let i = this.heap.findIndex((n) => n > val);
  if (i === -1) this.heap.push(val);
  else this.heap.splice(i, 0, val);

  if(this.heap.length > this.k){
    this.heap.shift(); 
  }

  return this.heap[0];
    }
}
