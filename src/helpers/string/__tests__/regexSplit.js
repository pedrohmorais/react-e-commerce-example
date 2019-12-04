import regexSplit from '../regexSplit';

describe('regexSplit():', () => {
  it('should split correctly', () => {
    const testTuples = [
      ['Carlos 123 Zanella 456', /\d+/, ['Carlos ', '123', ' Zanella ', '456', '']],
      [
        'Some words are big, others are not',
        /[a-z]{4,}/i,
        ['', 'Some', ' ', 'words', ' are big, ', 'others', ' are not'],
      ],
      [
        'A light version of *Markdown*, this is *so cool*!',
        /\*(.*?)\*/i,
        ['A light version of ', 'Markdown', ', this is ', 'so cool', '!'],
      ],
    ];

    testTuples.forEach((testTuple) => {
      const [string, regex, result] = testTuple;
      expect(regexSplit(string, regex)).toEqual(result);
    });
  });

  it('should be able to restore the original string if no capture group is used', () => {
    const testTuples = [
      ['Carlos 123 Zanella 456', /\d+/, ['Carlos ', '123', ' Zanella ', '456', '']],
      [
        'Some words are big, others are not',
        /[a-z]{4,}/i,
        ['', 'Some', ' ', 'words', ' are big, ', 'others', ' are not'],
      ],
    ];

    testTuples.forEach((testTuple) => {
      const [string, regex] = testTuple;
      expect(regexSplit(string, regex).join('')).toEqual(string);
    });
  });
});
