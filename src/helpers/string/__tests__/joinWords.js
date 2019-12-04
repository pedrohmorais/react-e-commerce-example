import joinWords from '../joinWords';

describe('joinWords', () => {
  it('should format message correctly when a single word', () => {
    expect(joinWords(['First'])).toBe('First');
  });

  it('should format message correctly when couple words', () => {
    expect(joinWords(['First', 'Second'])).toBe('First e Second');
  });

  it('should format message correctly when more than 2 words', () => {
    expect(joinWords(['First', 'Second', 'Other'])).toBe('First, Second e Other');
  });
});
