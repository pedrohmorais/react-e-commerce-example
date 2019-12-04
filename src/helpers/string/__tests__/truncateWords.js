import truncateWords from '../truncateWords';

describe('truncateWords():', () => {
  it('should truncate correctly', () => {
    const string = 'Engenharia de Computação - Ênfase em Sistemas Corporativos';
    const expected = 'Engenharia de Computação - Ênfase em Sistemas...';

    expect(truncateWords(string, 7)).toBe(expected);
  });

  it("shouldn't truncate a string that its length is less than cut length", () => {
    const string = 'Engenharia de Computação';

    expect(truncateWords(string, 4)).toBe(string);
  });
});
