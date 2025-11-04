# 🎯 Demonstration: How the Lab Works

This document shows how students will use the lab in practice.

## 📚 Study Flow

### 1️⃣ Step 1: Read the Problem

The student opens `PROBLEM.md` to understand what needs to be solved:

```markdown
# Problem: Pair Sum - Sorted Array

## Problem Statement
Given a sorted array and a target value, find the indices 
of a pair that sums to the target.

## Examples
nums = [-5, -2, 3, 4, 6], target = 7
Output: [2, 3]  (because 3 + 4 = 7)
```

### 2️⃣ Step 2: Implement the Solution

The student edits `my-solution-template.js`:

```javascript
// Student's attempt
function pairSumSorted(nums, target) {
    // Student's implementation here
}
```

### 3️⃣ Step 3: Test the Solution

The student runs tests to verify if it's correct:

```bash
npm test two-pointers/pair-sum-sorted
```

**Expected result:**
```
✓ finds pair in the middle of array
✓ finds pair with duplicate numbers
✓ finds pair at the extremes
...
```

### 4️⃣ Step 4: Compare with Solution

If stuck or wants to verify, the student opens `solution.js`:

```javascript
function pairSumSorted(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum < target) left++;
        else if (sum > target) right--;
        else return [left, right];
    }
    return [];
}
```

## 🎬 Practical Demonstration

### Scenario 1: Student solving the problem

```bash
# 1. Read the problem
cat two-pointers/pair-sum-sorted/PROBLEM.md

# 2. Implement (edit my-solution-template.js)
# ... student's code ...

# 3. Test
npm test two-pointers/pair-sum-sorted/solution.test.js

# If tests pass: ✅ Success!
# If they fail: study solution.js and try again
```

### Scenario 2: Running all tests

```bash
npm test
```

**Output:**
```
PASS two-pointers/pair-sum-sorted/solution.test.js
  ✓ 8 tests passing

PASS two-pointers/triplet-sum/solution.test.js
  ✓ 8 tests passing

PASS two-pointers/is-palindrome-valid/solution.test.js
  ✓ 13 tests passing

PASS two-pointers/largest-container/solution.test.js
  ✓ 9 tests passing
```

### Scenario 3: Watch mode (development)

```bash
npm run test:watch
```

Tests run automatically whenever you save a file!

## 📂 Structure of Each Module

Each problem has 3 files that work together:

```
pair-sum-sorted/
├── PROBLEM.md          ← 📖 Student reads first
├── solution.js         ← 👀 Student consults later
└── solution.test.js    ← ✅ Student tests their solution
```

## 🔄 Complete Learning Flow

```
1. Read PROBLEM.md
   ↓
2. Understand the problem and examples
   ↓
3. Implement your own solution
   ↓
4. Run: npm test
   ↓
5a. If passed ✅ → Next problem
   ↓
5b. If failed ❌ → Read solution.js
   ↓
6. Understand the solution and try again
   ↓
7. Repeat until mastered
```

## 💡 Complete Practical Example

### Problem: Pair Sum Sorted

**Input:**
```javascript
nums = [-5, -2, 3, 4, 6]
target = 7
```

**Thought process:**
1. Sorted array: ✅
2. Two pointers: left=0 (-5), right=4 (6)
3. Sum: -5 + 6 = 1 < 7 → move left
4. left=1 (-2), right=4 (6): -2 + 6 = 4 < 7 → move left
5. left=2 (3), right=4 (6): 3 + 6 = 9 > 7 → move right
6. left=2 (3), right=3 (4): 3 + 4 = 7 ✅
7. Return [2, 3]

**Test:**
```javascript
expect(pairSumSorted([-5, -2, 3, 4, 6], 7)).toEqual([2, 3]);
// ✅ Passes!
```

## 🎓 How to Use for Study

### Option 1: Guided Study (Recommended)
1. Read `PROBLEM.md`
2. Try implementing without looking at `solution.js`
3. Test with `npm test`
4. If needed, study `solution.js`
5. Redo from scratch

### Option 2: Reference Study
1. Read `PROBLEM.md` and `solution.js` together
2. Understand each line
3. Close the files
4. Implement from scratch
5. Test

### Option 3: Practice Only
1. Run `npm test`
2. See which tests fail
3. Implement until all pass
4. Compare with `solution.js`

## 🚀 Next Steps

After mastering all 4 problems:
- Try solving variations
- Implement other strategies
- Practice similar LeetCode problems
- Move on to the next algorithmic pattern!

