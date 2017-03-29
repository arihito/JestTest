test('always the same number', () => {
  const data = { number: 1234 };
  expect(data).toMatchSnapshot();
});

test('random number', () => {
  const data = { number: Math.random() };
  expect(data).toMatchSnapshot();
});
