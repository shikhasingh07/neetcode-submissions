/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        let lo = 0,
    hi = mountainArr.length() - 1;
  let n = mountainArr.length();

  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  let peak = lo;
  ((lo = 0), (hi = peak));
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let val = mountainArr.get(mid);

    if (val === target) {
      return mid;
      hi = mid - 1;
    } else if (val < target) lo = mid + 1;
    else {
      hi = mid - 1;
    }
  }

  ((lo = peak), (hi = n - 1));
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let val = mountainArr.get(mid);
    if (val === target) {
      return mid;
      lo = mid + 1;
    } else if (val < target) hi = mid - 1;
    else {
      lo = mid + 1;
    }
  }

  return -1;
    }
}
