function priceFormat(number = 0, locale = 'pt-BR') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL' }).format(number);
}

export default priceFormat;