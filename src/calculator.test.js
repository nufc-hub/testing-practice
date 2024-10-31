import Calculator from './calculator';

const calculator = new Calculator();

// Sum.

test('add 1 + 2 to equal 3', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test('add 2 + 2 to equal 4', () => {
  expect(calculator.sum(2, 2)).toBe(4);
});
