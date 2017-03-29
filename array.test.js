test('array filter', () => {
  const func = jest.fn() ;
  [1, 2, 3, 4].filter(func);
  expect(func).toHaveBeenCalled();
});

test('array som with returning true', () => {
  const func = jest.fn(() => true);
  [1, 2, 3, 4].some(func);
  expect(func).toHaveBeenCalledTimes(1);
});

test('array some with returning false', () => {
  const func = jest.fn(() => false);
  [1, 2, 3, 4].some(func);
  expect(func).toHaveBeenCalledTimes(4);
});
