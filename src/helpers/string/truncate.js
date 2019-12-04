/**
 * Truncate a string - method extracts a section of a string and returns it togeter with `...`.
 *
 * @param  {String} string - The string to be truncated.
 * @param  {Number} limit - The limit of the string length.
 *
 * @return {Array} - The capitalized string.
 */
function truncate(string, limit = 55) {
  return string.length > limit ? `${string.slice(0, limit > 3 ? limit - 3 : limit)}...` : string;
}

export default truncate;
