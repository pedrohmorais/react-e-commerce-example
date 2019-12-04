/**
 * Converts a numeric value to a currency value.
 *
 * @param  {Number} value - The value to be converted.
 * @param  {String} currency - The currency symbol (defaults to R$).
 *
 * @return {String} - The numeric value formatted as a currency string.
 */

export default function formatCurrency(value, currency = 'R$') {
  if (!value && value !== 0) return '';
  return `${currency} ${value
    .toFixed(2)
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
}
