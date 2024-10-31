import reverseString from './reverse-string';

// Check if a string is reversed.

test('string is reversed', () => {
  expect(reverseString('test')).toBe('tset');
});

test('string is reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
});
