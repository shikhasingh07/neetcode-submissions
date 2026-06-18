class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
          let greate = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let curr = arr[i];
        arr[i] = greate;
        if (curr > greate) {
            greate = curr;
        }
    }
    return arr;
    }
}
