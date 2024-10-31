import Calculator from './calculator';

const calculator = new Calculator();

// Sum.

test('add 1 + 2 to equal 3', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test('add 2 + 2 to equal 4', () => {
  expect(calculator.sum(2, 2)).toBe(4);
});

// Subtract.

test('subtract 3 - 2 to equal 1', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('subtract 4 - 4 to equal 0', () => {
  expect(calculator.subtract(4, 4)).toBe(0);
});

// Divide

test('divide 2 by 1 to equal 2', () => {
  expect(calculator.divide(2, 1)).toBe(2);
});

test('divide 12 by 3 to equal 4', () => {
  expect(calculator.divide(12, 3)).toBe(4);
});
