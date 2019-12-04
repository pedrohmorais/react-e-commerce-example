import numberFormat from '../numberFormat';

describe('numberFormat():', () => {
  it('should format correctly when format is pt-BR', () => {
    const testTuples = [
      [null, '0'],
      ['50', '50'],
      ['100', '100'],
      ['1500', '1.500'],
      ['10250', '10.250'],
    ];

    testTuples.forEach(t => expect(numberFormat(t[0], 'pt-BR')).toBe(t[1]));
  });

  it('should format correctly when format is en', () => {
    const testTuples = [
      [null, '0'],
      ['50', '50'],
      ['100', '100'],
      ['1500', '1,500'],
      ['10250', '10,250'],
    ];

    testTuples.forEach(t => expect(numberFormat(t[0], 'en')).toBe(t[1]));
  });
});
