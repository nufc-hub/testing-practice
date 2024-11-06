// Test average.
test('something function return average property with value of 4', () => {
  const obj = some.function();

  expect(obj.toHaveProperty('average', 4));
});
