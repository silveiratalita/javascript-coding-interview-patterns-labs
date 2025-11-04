const largestContainer = require('./my-solution-template');

describe('Largest Container', () => {
    test('finds largest container in example', () => {
        const heights = [2, 7, 8, 3, 7, 6];
        const result = largestContainer(heights);
        expect(result).toBe(24);
        // Verification: between indices 1 (7) and 5 (6): min(7, 6) × (5-1) = 6 × 4 = 24
    });

    test('returns minimum area for 2-element array with small values', () => {
        const heights = [1, 1];
        const result = largestContainer(heights);
        expect(result).toBe(1);
        // min(1, 1) × (1-0) = 1 × 1 = 1
    });

    test('finds largest container at extremes', () => {
        const heights = [4, 3, 2, 1, 4];
        const result = largestContainer(heights);
        expect(result).toBe(16);
        // min(4, 4) × (4-0) = 4 × 4 = 16
    });

    test('finds largest container in the middle', () => {
        const heights = [1, 2, 1];
        const result = largestContainer(heights);
        expect(result).toBe(2);
        // min(2, 1) × (2-0) = 1 × 2 = 2 (between indices 0 and 2)
        // or min(1, 1) × (2-1) = 1 × 1 = 1 (between indices 1 and 2)
        // maximum is 2
    });

    test('works with increasing heights', () => {
        const heights = [1, 2, 3, 4, 5];
        const result = largestContainer(heights);
        expect(result).toBe(6);
        // min(1, 5) × (4-0) = 1 × 4 = 4
        // min(2, 5) × (4-1) = 2 × 3 = 6 ✓
        // min(3, 5) × (4-2) = 3 × 2 = 6
        // min(4, 5) × (4-3) = 4 × 1 = 4
    });

    test('works with decreasing heights', () => {
        const heights = [5, 4, 3, 2, 1];
        const result = largestContainer(heights);
        expect(result).toBe(6);
        // min(5, 1) × (4-0) = 1 × 4 = 4
        // min(5, 2) × (3-0) = 2 × 3 = 6 ✓
        // min(4, 2) × (3-1) = 2 × 2 = 4
    });

    test('works with all equal heights', () => {
        const heights = [5, 5, 5, 5, 5];
        const result = largestContainer(heights);
        expect(result).toBe(20);
        // min(5, 5) × (4-0) = 5 × 4 = 20
    });

    test('works with large array', () => {
        const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        const result = largestContainer(heights);
        expect(result).toBe(49);
        // Between indices 1 (8) and 8 (7): min(8, 7) × (8-1) = 7 × 7 = 49
    });

    test('works with varied heights', () => {
        const heights = [3, 9, 3, 4, 7, 2, 12, 6];
        const result = largestContainer(heights);
        expect(result).toBe(45);
        // Between indices 1 (9) and 6 (12): min(9, 12) × (6-1) = 9 × 5 = 45
        // Between indices 0 (3) and 6 (12): min(3, 12) × (6-0) = 3 × 6 = 18
        // Between indices 1 (9) and 7 (6): min(9, 6) × (7-1) = 6 × 6 = 36
        // Maximum is 45
    });
});
