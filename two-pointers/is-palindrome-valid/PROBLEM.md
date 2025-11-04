# Problem: Is Palindrome Valid

## 📋 Problem Statement

A palindrome is a sequence of characters that reads the same forward and backward. Given a string, determine if it is a palindrome after removing all non-alphanumeric characters. A character is alphanumeric if it is a letter or a number.

**Important rules:**
- Ignore non-alphanumeric characters (punctuation, spaces, etc.)
- Ignore case differences
- An empty string is considered a palindrome

## 📝 Examples

### Example 1

**Input:**
```javascript
s = "A dog! a panic in a pagoda..."
```

**Output:**
```javascript
true
```

**Explanation:** After removing non-alphanumeric characters: `"Adogapanicinapagoda"` → `"Adogapanicinapagoda"` (reads the same backward when normalized)

### Example 2

**Input:**
```javascript
s = "abc123"
```

**Output:**
```javascript
false
```

**Explanation:** `"abc123"` is not equal to `"321cba"`

### Example 3

**Input:**
```javascript
s = "A man a plan a canal Panama"
```

**Output:**
```javascript
true
```

## 🎯 Objective

Implement an efficient solution using the **Two Pointers** technique with **Inward Traversal**.

## 💡 Hints

1. Use two pointers: `left` at the start and `right` at the end
2. Skip non-alphanumeric characters by moving the pointers
3. Compare characters ignoring case
4. If all pairs match, it's a palindrome

## ⏱️ Expected Complexity

- **Time:** O(n) where n is the length of the string
- **Space:** O(1)

## ✅ Suggested Test Cases

- String with only letters (palindrome)
- String with only letters (non-palindrome)
- String with numbers and letters
- String with many non-alphanumeric characters
- Empty string (should return true)
- String with a single alphanumeric character (should return true)
