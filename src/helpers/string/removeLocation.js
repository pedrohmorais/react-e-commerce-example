export const removeLocationPattern = '(([A-Z]{2})\\s-)+[A-zÀ-ÿ\\s]*-?';

const removeByPattern = (value, pattern) =>
  value.replace((value.match(new RegExp(pattern, 'g')) || []).join(''), '').trim();

const removeByMatch = (value, match) => value.replace(match, '');

/**
 * Removes location data (city and state) from the name of a location.
 *
 * @param  {String} value - The string to be processed
 * @param  {String} state - A state acronym (e.g.: SP, RJ, MG, etc.)
 * @param  {String} city - The name of a city
 *
 * @return {String} - The value string stripped from the state and city values if present,
 *                    or inaltered otherwise
 */

export default function removeLocation(value, { state, city, pattern }) {
  let result = value;

  if (pattern) {
    return removeByPattern(result, pattern);
  }

  if (state) {
    result = removeByMatch(result, state);
  }

  if (city) {
    result = removeByMatch(result, city);
  }

  // Replace separators eg.: (".", "-") to "-"
  return (result.match(/[A-zÀ-ÿ0-9][A-zÀ-ÿ0-9\s]*[A-zÀ-ÿ0-9]/g) || []).join(' - ');
}
