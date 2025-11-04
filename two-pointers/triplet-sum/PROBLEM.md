# Problem: Triplet Sum

## 📋 Problem Statement

Given an array of integers, return all unique triplets `[a, b, c]` such that `a + b + c = 0`. The solution must not contain duplicate triplets (e.g., `[1, 2, 3]` and `[2, 3, 1]` are considered duplicate triplets). If no triplets are found, return an empty array.

## 📝 Examples

### Example 1

**Input:**
```javascript
nums = [0, -1, 2, -3, 1]
```

**Output:**
```javascript
[[-3, 1, 2], [-1, 0, 1]]
```

### Example 2

**Input:**
```javascript
nums = [-1, 0, 1, 2, -1, -4]
```

**Output:**
```javascript
[[-1, -1, 2], [-1, 0, 1]]
```

## 🎯 Objective

Implement an efficient solution that:
1. Sorts the array first
2. Fixes one element and uses the Two Pointers technique to find the other two
3. Avoids duplicate triplets

## 💡 Hints

1. **Sort the array first** - necessary to use Two Pointers
2. **Fix one element**: For each `nums[i]`, search for pairs that sum to `-nums[i]`
3. **Avoid duplicates**:
   - Skip duplicate `a` values
   - Skip duplicate `b` values during pair search
4. **Optimization**: If `a > 0`, stop searching (no way to form a triplet that sums to 0)

## ⏱️ Expected Complexity

- **Time:** O(n²) - sorting O(n log n) + loop O(n) × search O(n)
- **Space:** O(n) - due to sorting algorithm

## ✅ Suggested Test Cases

- Triplets found in the middle of the array
- Array with duplicate numbers
- No triplets found
- Array with all positive numbers (returns empty)
- Array with all negative numbers (may return triplets)
