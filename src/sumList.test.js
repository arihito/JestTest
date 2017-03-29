const { sum, sum3, sumN } = require('./sum');

describe('sumN test', () => {
  it('adds 1 + 2 + 3 + 5 + 6', () => {
    expect(sumN(1, 2, 3, 5, 6)).toBe(17);
  });

  it('adds 2 + 5 + 7 + 10 + 32', () => {
    expect(sumN(2, 5, 7, 10, 32)).toBe(56);
  });

  it('adds -3 + 5 + -2 + 3 + -4 + 5', () => {
    expect(sumN(-3, 5, -2, 3, -4, 5)).toBe(4);
  });

});
