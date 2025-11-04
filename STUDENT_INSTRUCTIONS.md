# 📝 Student Instructions

## 🎯 How This Lab Works

This lab uses **automated tests** to validate your solution. You implement your solution and the tests verify if it's correct!

## 📋 Step by Step

### 1. Choose a Problem

Navigate to a folder, for example:
```bash
cd two-pointers/pair-sum-sorted
```

### 2. Read the Problem

Open and read the `PROBLEM.md` file:
- Understand what the problem asks for
- Study the examples provided
- Read the implementation hints

### 3. Implement Your Solution

**Edit the `my-solution-template.js` file** that already exists in the folder:

```javascript
function pairSumSorted(nums, target) {
    // TODO: Implement your solution here
    // Hint: Use two pointers (left and right)
    
    // Your implementation goes here ⬇️
    
    return [];
}
```

**Important:** 
- ✅ Edit only `my-solution-template.js`
- ❌ Don't edit `solution.js` (it's the reference solution)
- ❌ Don't edit `solution.test.js` (these are the tests)

### 4. Test Your Solution

Run the tests:

```bash
# Test a specific module
npm test two-pointers/pair-sum-sorted

# Or test all modules
npm test
```

### 5. See the Results

**If all tests pass:**
```
✅ PASS two-pointers/pair-sum-sorted/solution.test.js
   ✓ 8 tests passing
```
**Congratulations!** Your solution is correct! Move to the next problem.

**If some tests fail:**
```
❌ FAIL two-pointers/pair-sum-sorted/solution.test.js
   ✕ finds pair in the middle of array
   ✕ finds pair with duplicate numbers
```
Don't give up! This is normal. Read the errors and:
1. Review your implementation
2. Study `solution.js` to see the reference solution
3. Try again

## 💡 Important Tips

1. **Don't look at `solution.js` first**: Try solving on your own first
2. **Use tests as a guide**: They show important edge cases
3. **Read the errors**: Tests show what's wrong
4. **Practice multiple times**: Solve the same problem more than once
5. **Experiment**: Try different approaches

## 📁 File Structure

Each module has:

```
pair-sum-sorted/
├── PROBLEM.md                  ← 📖 Read first
├── my-solution-template.js     ← ✏️ EDIT HERE
├── solution.js                 ← 👀 Consult if needed
└── solution.test.js            ← ✅ Tests your code
```

## 🎓 Study Strategies

### Strategy 1: From Scratch (Recommended)
1. Read only `PROBLEM.md`
2. Implement in `my-solution-template.js`
3. Test until passing
4. Compare with `solution.js` to learn optimizations

### Strategy 2: Guided
1. Read `PROBLEM.md` and `solution.js` together
2. Understand each line of the solution
3. Close the files
4. Implement from scratch in `my-solution-template.js`
5. Test

### Strategy 3: Trial and Error
1. Run the tests
2. See which ones fail
3. Implement until all pass
4. Study `solution.js` to understand the optimal solution

## ❓ Common Problems

### "Tests don't pass"
- Check if you implemented the function correctly
- Verify you're exporting: `module.exports = yourFunction`
- Read Jest errors carefully
- Compare with `solution.js` if needed

### "I don't understand the problem"
- Read `PROBLEM.md` carefully
- Work through examples manually on paper
- Look at test cases in `solution.test.js`

### "I want to see the solution"
- Open `solution.js` (but try first!)
- Compare your solution with the reference
- Understand why the solution works

### "Where do I implement my solution?"
- **Always in `my-solution-template.js`**
- Tests automatically validate this file
- No need to create new files

## 🚀 Useful Commands

```bash
# Install dependencies (first time)
npm install

# Test all modules
npm test

# Test a specific module
npm test two-pointers/pair-sum-sorted

# Watch mode (tests automatically when saving)
npm run test:watch

# View test coverage
npm run test:coverage
```

## ✅ Completion Checklist

For each problem, you should:

- [ ] Read `PROBLEM.md` completely
- [ ] Implement solution in `my-solution-template.js`
- [ ] Run tests: `npm test`
- [ ] See all tests passing ✅
- [ ] Understand the solution complexity
- [ ] Compare with `solution.js` (optional)

---

**Good practice and success in your interviews! 🚀**

