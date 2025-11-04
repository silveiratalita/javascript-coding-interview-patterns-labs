const pairSumSorted = require('./my-solution-template');

describe('Pair Sum Sorted', () => {
    test('finds pair in the middle of array', () => {
        const nums = [-5, -2, 3, 4, 6];
        const target = 7;
        const result = pairSumSorted(nums, target);
        expect(result).toEqual([2, 3]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('finds pair with duplicate numbers', () => {
        const nums = [1, 1, 1];
        const target = 2;
        const result = pairSumSorted(nums, target);
        expect(result.length).toBe(2);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('finds pair at the extremes', () => {
        const nums = [2, 7, 11, 15];
        const target = 17;
        const result = pairSumSorted(nums, target);
        expect(result).toEqual([0, 3]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('returns empty array when no pair found', () => {
        const nums = [1, 2, 3, 4];
        const target = 10;
        const result = pairSumSorted(nums, target);
        expect(result).toEqual([]);
    });

    test('works with 2-element array that sums to target', () => {
        const nums = [3, 5];
        const target = 8;
        const result = pairSumSorted(nums, target);
        expect(result).toEqual([0, 1]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('returns empty array when 2-element array does not sum to target', () => {
        const nums = [1, 2];
        const target = 5;
        const result = pairSumSorted(nums, target);
        expect(result).toEqual([]);
    });

    test('works with negative numbers', () => {
        const nums = [-10, -5, -3, -1, 0, 2, 5];
        const target = -8;
        const result = pairSumSorted(nums, target);
        expect(result.length).toBe(2);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('works with large array', () => {
        const nums = Array.from({ length: 1000 }, (_, i) => i);
        const target = 1997; // 999 + 998 = 1997 (maximum possible sum)
        const result = pairSumSorted(nums, target);
        expect(result.length).toBe(2);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });
});

