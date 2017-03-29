const { sum, sum3, sumList } = require('./sum');

describe('sum3 test', () => {
  it('adds 1 + 2 + 3', () => {
    expect(sum3(1, 2, 3)).toBe(6);
  });

  it('adds 2 + 5 + 7', () => {
    expect(sum3(2, 5, 7)).toBe(14);
  });

  it('adds -3 + 5 + -2', () => {
    expect(sum3(-3, 5, -2)).toBe(0);
  });

});
