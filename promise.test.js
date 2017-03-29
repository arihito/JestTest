const asyncFunc = () => Promise.resolve('DUMMY TEXT');

test('async promise', () => {
  return asyncFunc().then((value) => {
    expect(value).toBe('DUMMY TEXT');
  });
});
