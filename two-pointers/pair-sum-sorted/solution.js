/**
 * Pair Sum - Sorted Array
 * 
 * Given a sorted array of integers and a target value,
 * returns the indices of any pair of numbers in the array that sum to the target.
 * 
 * Strategy: Two Pointers with Inward Traversal
 * Pointers start at opposite ends and move toward the center.
 * 
 * @param {number[]} nums - Sorted array of integers in ascending order
 * @param {number} target - Target sum value
 * @returns {number[]} Array with indices [i, j] where nums[i] + nums[j] === target,
 *                     or empty array if no pair is found
 * 
 * Complexity:
 * - Time: O(n) where n is the size of the array
 * - Space: O(1)
 */
function pairSumSorted(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        
        // If sum is less, increment left pointer
        // (need a larger number to increase the sum)
        if (sum < target) {
            left++;
        }
        // If sum is greater, decrement right pointer
        // (need a smaller number to decrease the sum)
        else if (sum > target) {
            right--;
        }
        // If target pair found, return indices
        else {
            return [left, right];
        }
    }
    
    // No pair found
    return [];
}

module.exports = pairSumSorted;

