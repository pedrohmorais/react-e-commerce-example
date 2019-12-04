function numberFormat(number = 0, locale = 'pt-BR') {
  return new Intl.NumberFormat(locale).format(number);
}

export default numberFormat;
