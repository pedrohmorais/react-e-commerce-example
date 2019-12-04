/**
 * Truncate a string - method extracts a section of a string by number
 *  of de words and returns it together.
 *
 * @param  {String} string - The string to be truncated.
 * @param  {Number} numberWords - The number of Words to cut the string.
 *
 * @return {Array} - The capitalized string.
 */
function truncateWords(str, numberWords = 50) {
  const words = str.split(' ');
  const strLength = words.length;
  let newString = words.splice(0, numberWords).join(' ');
  if (strLength > numberWords) {
    newString = `${newString}...`;
  }
  return newString;
}

export default truncateWords;
