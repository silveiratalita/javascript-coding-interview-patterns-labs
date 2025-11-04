const tripletSum = require('./my-solution-template');

describe('Triplet Sum', () => {
    test('finds triplets in example 1', () => {
        const nums = [0, -1, 2, -3, 1];
        const result = tripletSum(nums);
        
        // Sort triplets for comparison
        const sortedResult = result.map(triplet => triplet.sort((a, b) => a - b));
        sortedResult.sort((a, b) => {
            if (a[0] !== b[0]) return a[0] - b[0];
            if (a[1] !== b[1]) return a[1] - b[1];
            return a[2] - b[2];
        });
        
        expect(sortedResult).toEqual([[-3, 1, 2], [-1, 0, 1]]);
    });

    test('finds triplets in example 2', () => {
        const nums = [-1, 0, 1, 2, -1, -4];
        const result = tripletSum(nums);
        
        // Sort triplets for comparison
        const sortedResult = result.map(triplet => triplet.sort((a, b) => a - b));
        sortedResult.sort((a, b) => {
            if (a[0] !== b[0]) return a[0] - b[0];
            if (a[1] !== b[1]) return a[1] - b[1];
            return a[2] - b[2];
        });
        
        expect(sortedResult).toEqual([[-1, -1, 2], [-1, 0, 1]]);
    });

    test('returns empty array when no triplets found', () => {
        const nums = [1, 2, 3, 4];
        const result = tripletSum(nums);
        expect(result).toEqual([]);
    });

    test('returns empty array when array contains only positive numbers', () => {
        const nums = [1, 2, 3, 4, 5];
        const result = tripletSum(nums);
        expect(result).toEqual([]);
    });

    test('returns empty array when array contains only negative numbers', () => {
        const nums = [-1, -2, -3];
        const result = tripletSum(nums);
        expect(result).toEqual([]);
    });

    test('does not return duplicate triplets', () => {
        const nums = [-1, 0, 1, 0, 1, -1];
        const result = tripletSum(nums);
        
        // Verify no duplicates
        const stringified = result.map(triplet => 
            triplet.sort((a, b) => a - b).join(',')
        );
        const unique = new Set(stringified);
        expect(unique.size).toBe(result.length);
        
        // Verify all triplets sum to zero
        result.forEach(triplet => {
            expect(triplet.reduce((a, b) => a + b, 0)).toBe(0);
        });
    });

    test('works with array containing zeros', () => {
        const nums = [-1, 0, 1, 0];
        const result = tripletSum(nums);
        
        // Should find at least [-1, 0, 1]
        expect(result.length).toBeGreaterThan(0);
        result.forEach(triplet => {
            expect(triplet.reduce((a, b) => a + b, 0)).toBe(0);
        });
    });

    test('works with large array', () => {
        const nums = [-5, -2, -1, 0, 1, 2, 5];
        const result = tripletSum(nums);
        
        // Verify all triplets sum to zero
        result.forEach(triplet => {
            expect(triplet.reduce((a, b) => a + b, 0)).toBe(0);
        });
        
        // Verify no duplicates
        const stringified = result.map(triplet => 
            triplet.sort((a, b) => a - b).join(',')
        );
        const unique = new Set(stringified);
        expect(unique.size).toBe(result.length);
    });
});
