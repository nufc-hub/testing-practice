import CaesarCipher from './caesarCipher';

const caesarCipher = new CaesarCipher();

// Character shift of 3.
test('shift abc to return def', () => {
  expect(caesarCipher.shift('abc', 3)).toBe('def');
});

// Character shift of 4.
test('shift ghi to return klm', () => {
  expect(caesarCipher.shift('ghi', 4)).toBe('klm');
});

// Text wrap, e.g. from z to a.
test('shift xyz to return abc', () => {
  expect(caesarCipher.shift('xyz', 3)).toBe('abc');
});

// Text wrap, e.g. from Z to A.
test('shift XYZ to return ABC', () => {
  expect(caesarCipher.shift('XYZ', 3)).toBe('ABC');
});

// Preserve case.
test('shift heLLo to return khOOr', () => {
  expect(caesarCipher.shift('heLLo', 3)).toBe('khOOr');
});

// Preserve case.
test('shift wORld to return zRUog', () => {
  expect(caesarCipher.shift('wORld', 3)).toBe('zRUog');
});

// Non-alphabetical characters remain unchanged.
test(`shift 'Hello, World!' to return 'Khoor, Zruog!'`, () => {
  expect(caesarCipher.shift('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
