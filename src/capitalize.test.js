import capitalize from './capitalize';

// Check if first letter of string is capitalised.

test('first letter is capitalized', () => {
  expect(capitalize('test')).toBe('Test');
});

test('first letter is capitalized', () => {
  expect(capitalize('road')).toBe('Road');
});
