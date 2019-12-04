/**
 * Splits a string using a regular expression.
 *
 * @param  {String} string - The string to be split.
 * @param  {RegEx} regex - The regular expression used to decide where to split.
 *
 * @return {Array} - An array containing the original string splitted. Uneven positions in the
 * array hold the parts of the string that matches the regex. Calling ".join('')" in it should
 * restore the original string.
 */
export default function regexSplit(string, regex) {
  const match = string.match(regex);

  if (!match) {
    return [string];
  }

  const matchedString = match[match.length - 1];
  return [string.substr(0, match.index), matchedString].concat(
    regexSplit(string.substr(match.index + match[0].length), regex),
  );
}
