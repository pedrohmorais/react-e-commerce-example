import randomPick from '../randomPick';

describe('randomPick', () => {
  test('should always pick an element from the array', () => {
    const array = ['woot', 37, { a: 'b' }, {}, null];
    for (let cases = 0; cases < array.length * 3; cases += 1) {
      expect(array.indexOf(randomPick(array))).toBeGreaterThanOrEqual(0);
    }
  });
});
