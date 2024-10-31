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

test('quotient of 2 and 1 to equal 2', () => {
  expect(calculator.divide(2, 1)).toBe(2);
});

test('quotient of 12 and 3 to equal 4', () => {
  expect(calculator.divide(12, 3)).toBe(4);
});

// Multiply.

test('product of 1 and 2 to equal 2', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('product of 3 and 4 to equal 12', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});
