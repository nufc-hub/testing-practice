import ArrayAnalyzer from './analyzeArray';

const arrayAnalyzer = new ArrayAnalyzer();

// Test average.

test('return average with value of 4', () => {
  const obj = arrayAnalyzer.createObject([1, 8, 3, 4, 2, 6]);

  expect(obj).toHaveProperty('average', 4);
});

test('return average with value of 5', () => {
  const obj = arrayAnalyzer.createObject([2, 6, 3, 4, 5, 10]);

  expect(obj).toHaveProperty('average', 5);
});

// Test min

test('return the lowest value in the array with a value of 1', () => {
  const obj = arrayAnalyzer.createObject([1, 8, 3, 4, 2, 6]);

  expect(obj).toHaveProperty('min', 1);
});

test('return the lowest value in the array with a value of 2', () => {
  const obj = arrayAnalyzer.createObject([12, 8, 3, 4, 2, 6]);

  expect(obj).toHaveProperty('min', 2);
});

// Test max.

test('return the highest value in the array with a value of 8', () => {
  const obj = arrayAnalyzer.createObject([1, 8, 3, 4, 2, 6]);

  expect(obj).toHaveProperty('max', 8);
});

test('return the highest value in the array with a value of 12', () => {
  const obj = arrayAnalyzer.createObject([12, 8, 3, 4, 2, 6]);

  expect(obj).toHaveProperty('max', 12);
});
