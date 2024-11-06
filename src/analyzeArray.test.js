import ArrayAnalyzer from './analyzeArray';

const arrayAnalyzer = new ArrayAnalyzer();

// Test average.
test('return average with value of 4', () => {
  const obj = arrayAnalyzer.createObject([1, 8, 3, 4, 2, 6]);

  expect(obj).toHaveProperty('average', 4);
});

// Test min

test('return the lowest value in the array with a value of 1', () => {
  const obj = arrayAnalyzer.createObject([1, 8, 3, 4, 2, 6]);

  expect(obj).toHaveProperty('min', 1);
});
