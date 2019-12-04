import capitalize from '../capitalize';

describe('capitalize():', () => {
  it('should capitalize correctly', () => {
    const testTuples = [
      ['  cARloS  ZänêLlA  ', 'Carlos Zänêlla'],
      ['', ''],
      ['     ', ''],
      ['  12345  ', '12345'],
      ['ALL CAPS', 'All Caps'],
      ['SINGLEWORD', 'Singleword'],
      ['Already Capitalized', 'Already Capitalized'],
    ];

    testTuples.forEach(t => expect(capitalize(t[0])).toBe(t[1]));
  });
});
