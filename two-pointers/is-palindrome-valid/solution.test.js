const isPalindromeValid = require('./my-solution-template');

describe('Is Palindrome Valid', () => {
    test('returns true for example 1', () => {
        const s = "A dog! a panic in a pagoda...";
        expect(isPalindromeValid(s)).toBe(true);
    });

    test('returns false for example 2', () => {
        const s = "abc123";
        expect(isPalindromeValid(s)).toBe(false);
    });

    test('returns true for example 3', () => {
        const s = "A man a plan a canal Panama";
        expect(isPalindromeValid(s)).toBe(true);
    });

    test('returns true for empty string', () => {
        const s = "";
        expect(isPalindromeValid(s)).toBe(true);
    });

    test('returns true for string with only spaces and punctuation', () => {
        const s = "   !!! ...   ";
        expect(isPalindromeValid(s)).toBe(true);
    });

    test('returns true for simple palindrome', () => {
        const s = "racecar";
        expect(isPalindromeValid(s)).toBe(true);
    });

    test('returns true for palindrome with mixed case', () => {
        const s = "RaceCar";
        expect(isPalindromeValid(s)).toBe(true);
    });

    test('returns false for non-palindrome string', () => {
        const s = "hello";
        expect(isPalindromeValid(s)).toBe(false);
    });

    test('returns true for palindrome with numbers', () => {
        const s = "A1b2b1A";
        expect(isPalindromeValid(s)).toBe(true);
    });

    test('returns false for non-palindrome with numbers', () => {
        const s = "A1b2c3";
        expect(isPalindromeValid(s)).toBe(false);
    });

    test('returns true for palindrome with many special characters', () => {
        const s = "Madam, I'm Adam";
        expect(isPalindromeValid(s)).toBe(true);
    });

    test('returns true for string with single alphanumeric character', () => {
        const s = "a";
        expect(isPalindromeValid(s)).toBe(true);
    });

    test('returns true for numeric palindrome', () => {
        const s = "12321";
        expect(isPalindromeValid(s)).toBe(true);
    });
});
