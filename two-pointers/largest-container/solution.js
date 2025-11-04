/**
 * Largest Container
 * 
 * Given an array of numbers representing heights of vertical lines,
 * finds the largest container that can be formed by two lines.
 * 
 * The amount of water that can be contained between two lines i and j is:
 * min(heights[i], heights[j]) × (j - i)
 * 
 * Strategy: Two Pointers with Inward Traversal
 * Start with maximum width (extremes) and gradually reduce width
 * while trying to find greater heights that compensate for the reduction.
 * 
 * @param {number[]} heights - Array of vertical line heights
 * @returns {number} The largest amount of water that can be contained
 * 
 * Complexity:
 * - Time: O(n) where n is the size of the array
 * - Space: O(1)
 */
function largestContainer(heights) {
    let maxWater = 0;
    let left = 0;
    let right = heights.length - 1;
    
    while (left < right) {
        // Calculate water contained between current pair of lines
        // Container height is limited by the smaller of the two lines
        const water = Math.min(heights[left], heights[right]) * (right - left);
        maxWater = Math.max(maxWater, water);
        
        // Move pointers inward, always moving the pointer at the smaller line
        // This is because:
        // - If we keep the smaller line, any movement reduces the area
        // - By moving the smaller line, we have a chance to find a larger line
        //   that might compensate for the width reduction
        if (heights[left] < heights[right]) {
            left++;
        } else if (heights[left] > heights[right]) {
            right--;
        } else {
            // If heights are equal, move both (can be optimized but keeps simplicity)
            left++;
            right--;
        }
    }
    
    return maxWater;
}

module.exports = largestContainer;
