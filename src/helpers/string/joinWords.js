import formatMessage from './formatMessage';

/**
 * Creates a string joining other strings from array.
 *
 * @param  {words} Array - List of words.
 *
 * @return {String} - An string spplitted by commas and connectors ('e', 'and').
 */

export default function joinWords(words) {
  if (!words) return '';

  let joined = '';

  if (words.length > 1) {
    if (words.length === 2) {
      joined += `${words[0]} ${formatMessage('searchResult.filters.connector')} ${words[1]}`;
    } else {
      words.forEach((word, index) => {
        if (index === 0) {
          joined += word;
        } else if (index < words.length - 1) {
          joined += `, ${word}`;
        } else {
          joined += ` ${formatMessage('searchResult.filters.connector')} ${word}`;
        }
      });
    }
  } else if (words.length === 1) {
    joined += words[0];
  }

  return joined;
}
