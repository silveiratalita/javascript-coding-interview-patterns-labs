# Problem: Largest Container

## 📋 Problem Statement

You are given an array of numbers, each representing the height of a vertical line in a graph. A container can be formed with any pair of these lines, along with the x-axis of the graph. Return the amount of water that the largest container can hold.

**Rules:**
- The amount of water = minimum height between the two lines × width (distance between indices)
- The container height is limited by the smaller of the two lines (to prevent overflow)

## 📝 Example

### Example

**Input:**
```javascript
heights = [2, 7, 8, 3, 7, 6]
```

**Output:**
```javascript
24
```

**Explanation:** 
- The largest container can be formed between indices 1 and 5
- Minimum height = min(7, 6) = 6
- Width = 5 - 1 = 4
- Water = 6 × 4 = 24 ✓

## 🎯 Objective

Implement an efficient solution using the **Two Pointers** technique with **Inward Traversal**.

## 💡 Hints

1. Start with pointers at the extremes (maximum width)
2. Calculate the current area: `min(heights[left], heights[right]) × (right - left)`
3. Move the pointers:
   - If `heights[left] < heights[right]` → move `left` inward
   - If `heights[right] < heights[left]` → move `right` inward
   - If they are equal → move both
4. Keep track of the largest area found

## ⏱️ Expected Complexity

- **Time:** O(n) where n is the size of the array
- **Space:** O(1)

## ✅ Suggested Test Cases

- Array with increasing heights
- Array with decreasing heights
- Array with only 2 elements
- Array where the largest container is at the extremes
- Array where the largest container is in the middle
- Array with equal heights
