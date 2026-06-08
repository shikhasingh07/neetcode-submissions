class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
   threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate numbers for i
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1; // Left pointer
        let right = nums.length - 1; // Right pointer

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // Found a valid triplet
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for left and right
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Move both pointers after adding the triplet
                left++;
                right--;
            } else if (sum < 0) {
                left++; // Increase the sum
            } else {
                right--; // Decrease the sum
            }
        }
    }

    return result; // Return the list of triplets
};
}
