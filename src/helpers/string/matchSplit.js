/**
 * Splits a string using another string, ignoring case and diacritics.
 *
 * @param  {String} string - The string to be split.
 * @param  {RegEx} regex - The regular expression used to decide where to split.
 *
 * @return {Array} - An array containing the original string splitted. Uneven positions in the
 * array hold the parts of the string that matches the regex. Calling ".join('')" in it should
 * restore the original string.
 */

import latinize from 'latinize';

function matchSplit(string, pattern) {
  const cleanString = latinize(string).toLowerCase();
  const cleanPattern = latinize(pattern).toLowerCase();
  const match = cleanString.match(cleanPattern);

  if (!match) {
    return [string];
  }

  return [string.substr(0, match.index), string.substr(match.index, pattern.length)].concat(
    matchSplit(string.substr(match.index + pattern.length), pattern),
  );
}

export default matchSplit;
