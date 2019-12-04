/**
 * Capitalizes a string - converts all characters to lowercase, except the first character
 * of each token.
 *
 * @param  {String} string - The string to be capitalized.
 *
 * @return {Array} - The capitalized string.
 */
function capitalize(string) {
  return string
    .trim()
    .toLowerCase()
    .split(/\s+/g)
    .map(token => `${token.substr(0, 1).toUpperCase()}${token.substr(1)}`)
    .join(' ');
}

export default capitalize;
