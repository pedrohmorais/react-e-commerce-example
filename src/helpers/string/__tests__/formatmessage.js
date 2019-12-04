import localisation from '../../../localisations';
import FormatMessage from '../formatMessage';

const { translation } = localisation;

describe('FormatMessage', () => {
  it('should format message correctly with an available string key from localisations', () => {
    expect(FormatMessage('global.search.page.placeholder')).toBe(
      translation['global.search.page.placeholder'],
    );
  });

  it('should return empty with an unavailable string key from localisations', () => {
    expect(FormatMessage('global.NOT.AVAILABLE')).toBe('');
  });
});
