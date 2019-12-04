import deslugify from '../deslugify';

describe('deslugify():', () => {
  it('should deslugify correctly', () => {
    const testTuples = [
      ['universidade-estacio-de-sa', 'Universidade Estacio De Sa'],
      ['     ', ''],
      ['  12345  ', '12345'],
      ['ALL CAPS', 'All caps'],
      ['SINGLEWORD', 'Singleword'],
      ['two-words', 'Two Words'],
      ['tHREe-WOrds-heRE', 'Three Words Here'],
    ];

    testTuples.forEach(t => expect(deslugify(t[0])).toBe(t[1]));
  });

  it('should do nothing if input is null or undefined', () => {
    expect(deslugify()).toBe(null);
    expect(deslugify(null)).toBe(null);
    expect(deslugify('')).toBe(null);
  });
});
