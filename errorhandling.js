// tests/utils.test.js
const { calculateMean, calculateMedian, calculateMode } = require('../utils');

test('calculateMean returns the correct mean', () => {
    expect(calculateMean([1, 2, 3])).toBe(2);
});

test('calculateMedian returns the correct median', () => {
    expect(calculateMedian([1, 2, 3])).toBe(2);
});

test('calculateMode returns the correct mode', () => {
    expect(calculateMode([1, 2, 2, 3])).toBe(2);
});
