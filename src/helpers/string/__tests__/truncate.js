import truncate from '../truncate';

describe('truncate():', () => {
  it('should truncate correctly', () => {
    const string = 'Engenharia de Computação - Ênfase em Sistemas Corporativos';
    const expected = 'Engenharia de Computação - Ênfase em Sistemas Corpor...';

    expect(truncate(string)).toBe(expected);
  });

  it("shouldn't truncate a string that its length is less than cut length", () => {
    const string = 'Direito';

    expect(truncate(string)).toBe(string);
  });
});
