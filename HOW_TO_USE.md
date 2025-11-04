# 🚀 How to Use the Lab - Quick Guide

## 📋 Overview

This lab contains 4 practical problems on the **Two Pointers** technique. Each problem has:
- 📖 A complete problem statement (`PROBLEM.md`)
- 💻 A reference solution (`solution.js`)
- ✅ Automated tests (`solution.test.js`)

## 🎯 Quick Usage Flow

### 1. Install Dependencies (first time)

```bash
npm install
```

### 2. Choose a Problem

Navigate to a folder, for example:
```bash
cd two-pointers/pair-sum-sorted
```

### 3. Read the Problem

Open `PROBLEM.md` and understand:
- What the problem asks for
- The examples provided
- Implementation hints

### 4. Implement Your Solution

**Edit the `my-solution-template.js` file** that already exists in each module:

```javascript
// two-pointers/pair-sum-sorted/my-solution-template.js
function pairSumSorted(nums, target) {
    // TODO: Implement your solution here
    // Hint: Use two pointers (left and right)
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) return [left, right];
        if (sum < target) left++;
        else right--;
    }
    
    return [];
}
```

**Important:** Tests automatically validate the `my-solution-template.js` file!

### 5. Test Your Solution

**Option A: Test a specific module**
```bash
npm test two-pointers/pair-sum-sorted
```

**Option B: Test all modules**
```bash
npm test
```

**Option C: Watch mode (tests automatically when saving)**
```bash
npm run test:watch
```

### 6. Compare with Solution

If you need help, open `solution.js` to see the commented reference solution.

## 📊 Example Test Output

When you run `npm test`, you'll see something like:

```
PASS two-pointers/pair-sum-sorted/solution.test.js
  Pair Sum Sorted
    ✓ finds pair in the middle of array
    ✓ finds pair with duplicate numbers
    ✓ finds pair at the extremes
    ✓ returns empty array when no pair found
    ✓ works with 2-element array that sums to target
    ✓ returns empty array when 2-element array does not sum to target
    ✓ works with negative numbers
    ✓ works with large array

Test Suites: 4 passed, 4 total
Tests:       38 passed, 38 total
```

## 🎓 Study Strategies

### Strategy 1: From Scratch (Recommended)
1. Read only `PROBLEM.md`
2. Implement without looking at `solution.js`
3. Test until passing
4. Compare with `solution.js` to learn

### Strategy 2: Guided
1. Read `PROBLEM.md` and `solution.js` together
2. Understand each line
3. Close the files
4. Implement from scratch
5. Test

### Strategy 3: Trial and Error
1. Run the tests
2. See which ones fail
3. Implement until all pass
4. Study `solution.js` to optimize

## 🔍 Manual Testing

You can also test manually in Node.js:

```javascript
const pairSumSorted = require('./two-pointers/pair-sum-sorted/solution.js');

// Test 1
console.log(pairSumSorted([-5, -2, 3, 4, 6], 7)); 
// Expected: [2, 3]

// Test 2
console.log(pairSumSorted([1, 1, 1], 2)); 
// Expected: [0, 1] or [1, 0]

// Test 3
console.log(pairSumSorted([1, 2, 3], 10)); 
// Expected: []
```

## 📁 File Structure

```
two-pointers/
├── pair-sum-sorted/
│   ├── PROBLEM.md                  ← Start here
│   ├── my-solution-template.js      ← ✏️ IMPLEMENT HERE
│   ├── solution.js                  ← Reference solution (consult if needed)
│   └── solution.test.js             ← Tests my-solution-template.js
├── triplet-sum/
│   └── ... (same structure)
├── is-palindrome-valid/
│   └── ... (same structure)
└── largest-container/
    └── ... (same structure)
```

## 💡 Tips

1. **Don't look at the solution first**: Try solving on your own
2. **Use tests as a guide**: They show important edge cases
3. **Practice multiple times**: Solve the same problem more than once
4. **Note your questions**: Compare with the solution later
5. **Experiment with variations**: Try optimizing or solving differently

## ❓ Common Issues

### "Tests don't pass"
- Check if your function has the correct name
- Verify you're exporting correctly: `module.exports = yourFunction`
- Read Jest errors carefully

### "I don't understand the problem"
- Read `PROBLEM.md` carefully
- Work through examples manually
- Look at test cases in `solution.test.js`

### "I want to see the solution"
- Open `solution.js` (but try first!)
- Compare your solution with the reference
- Understand why the solution works

## 🎯 Next Steps

After completing all 4 problems:
1. Solve variations of the problems
2. Practice similar problems on online platforms
3. Move on to other algorithmic patterns
4. Review problems periodically

---

**Good practice and success in your interviews! 🚀**

