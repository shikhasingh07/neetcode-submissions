class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
 findRight = (nums, n, target) => {
  let result = -1;
  let lo = 0,
    hi = n - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) {
      result = mid; // save kar lo
      lo = mid + 1; // aur left mein dhundo aur bhi
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return result;
};

findLeft = (nums, n, target) => {
  let result = -1;
  let lo = 0,
    hi = n - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) {
      result = mid; // save kar lo
      hi = mid - 1; // aur left mein dhundo aur bhi
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return result;
};

    searchRange(nums, target) {
         let n = nums.length;
  let left = this.findLeft(nums, n, target);
  let right = this.findRight(nums, n, target);

  return [left, right];
    }
}
