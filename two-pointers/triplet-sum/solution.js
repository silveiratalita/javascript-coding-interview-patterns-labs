/**
 * Triplet Sum
 * 
 * Given an array of integers, returns all unique triplets [a, b, c]
 * such that a + b + c = 0, without duplicate triplets.
 * 
 * Strategy:
 * 1. Sort the array
 * 2. For each element 'a', use Two Pointers to find pairs [b, c] that sum to '-a'
 * 3. Avoid duplicates by skipping repeated values
 * 
 * @param {number[]} nums - Array of integers
 * @returns {number[][]} Array of unique triplets that sum to zero
 * 
 * Complexity:
 * - Time: O(n²) - sorting O(n log n) + loop O(n) × search O(n)
 * - Space: O(n) - due to sorting algorithm
 */
function tripletSum(nums) {
    const triplets = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        // Optimization: triplets consisting only of positive numbers
        // will never sum to 0
        if (nums[i] > 0) {
            break;
        }
        
        // To avoid duplicate triplets, skip 'a' if it's equal to the previous number
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        // Find all pairs that sum to target '-a' (-nums[i])
        const pairs = pairSumSortedAllPairs(nums, i + 1, -nums[i]);
        for (const pair of pairs) {
            triplets.push([nums[i], ...pair]);
        }
    }
    
    return triplets;
}

/**
 * Finds all pairs in a sorted array that sum to the target.
 * Uses Two Pointers technique with Inward Traversal.
 * 
 * @param {number[]} nums - Sorted array
 * @param {number} start - Starting index for search (excluding elements before this)
 * @param {number} target - Target sum value
 * @returns {number[][]} Array of pairs [b, c] that sum to target
 */
function pairSumSortedAllPairs(nums, start, target) {
    const pairs = [];
    let left = start;
    let right = nums.length - 1;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        
        if (sum === target) {
            pairs.push([nums[left], nums[right]]);
            left++;
            // To avoid duplicate pairs '[b, c]', skip 'b' if it's equal to the previous
            while (left < right && nums[left] === nums[left - 1]) {
                left++;
            }
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return pairs;
}

module.exports = tripletSum;
