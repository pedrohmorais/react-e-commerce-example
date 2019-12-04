import matchSplit from '../matchSplit';

describe('matchSplit():', () => {
  it('should split correctly', () => {
    const testTuples = [
      ['Déja Vu', 'deja', ['', 'Déja', ' Vu']],
      [
        'Curso de Administração para quem gosta de ADMINISTRAÇÃO',
        'aDmInIsTrAcAo',
        ['Curso de ', 'Administração', ' para quem gosta de ', 'ADMINISTRAÇÃO', ''],
      ],
      ['Abobrinhas são bacanas', 'abacate', ['Abobrinhas são bacanas']],
    ];

    testTuples.forEach((testTuple) => {
      const [string, pattern, result] = testTuple;
      expect(matchSplit(string, pattern)).toEqual(result);
    });
  });
});
