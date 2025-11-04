# Problem: Pair Sum - Sorted Array

## 📋 Problem Statement

Given a sorted array of integers in ascending order and a target value, return the indices of any pair of numbers in the array that sum to the target. The order of indices in the result does not matter. If no pair is found, return an empty array.

## 📝 Examples

### Example 1

**Input:**
```javascript
nums = [-5, -2, 3, 4, 6]
target = 7
```

**Output:**
```javascript
[2, 3]
```

**Explanation:** `nums[2] + nums[3] = 3 + 4 = 7`

### Example 2

**Input:**
```javascript
nums = [1, 1, 1]
target = 2
```

**Output:**
```javascript
[0, 1]
```

**Explanation:** Other valid outputs could be `[1, 0]`, `[0, 2]`, `[2, 0]`, `[1, 2]`, or `[2, 1]`

## 🎯 Objective

Implement an efficient solution using the **Two Pointers** technique with **Inward Traversal**.

## 💡 Hints

1. Take advantage of the array being **sorted**
2. Use two pointers: one at the start (`left`) and one at the end (`right`)
3. Compare the current sum with the target:
   - If sum < target → increment `left` (need to increase)
   - If sum > target → decrement `right` (need to decrease)
   - If sum === target → return the indices

## ⏱️ Expected Complexity

- **Time:** O(n) where n is the size of the array
- **Space:** O(1)

## ✅ Suggested Test Cases

- Pair found in the middle of the array
- Pair found at the extremes
- Array with duplicate numbers
- No pair found (returns empty array)
- Array with only 2 elements
