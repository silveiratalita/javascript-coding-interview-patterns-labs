/**
 * Is Palindrome Valid
 * 
 * Determines if a string is a palindrome after removing all
 * non-alphanumeric characters. Ignores case differences.
 * 
 * Strategy: Two Pointers with Inward Traversal
 * Pointers start at opposite ends and move toward the center,
 * skipping non-alphanumeric characters.
 * 
 * @param {string} s - String to be checked
 * @returns {boolean} true if the string is a palindrome, false otherwise
 * 
 * Complexity:
 * - Time: O(n) where n is the length of the string
 * - Space: O(1)
 */
function isPalindromeValid(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Skip non-alphanumeric characters from the left
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        
        // Skip non-alphanumeric characters from the right
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        
        // If characters at left and right pointers don't match,
        // the string is not a palindrome
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        
        left++;
        right--;
    }
    
    // If we successfully compared all character pairs,
    // the string is a palindrome
    return true;
}

/**
 * Checks if a character is alphanumeric (letter or number).
 * 
 * @param {string} char - Character to be checked
 * @returns {boolean} true if the character is alphanumeric, false otherwise
 */
function isAlphanumeric(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}

module.exports = isPalindromeValid;
