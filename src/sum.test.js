const { sum, sum3, sumList } = require('./sum');

describe('sum test', () => {
  it('adds 1 + 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 2 + 5', () => {
    expect(sum(2, 5)).toBe(7);
  });

  it('adds -3 + 5', () => {
    expect(sum(-3, 5)).toBe(2);
  });

});
