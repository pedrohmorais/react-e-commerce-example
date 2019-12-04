import formatCurrency from '../formatCurrency';

describe('formatCurrency():', () => {
  it('should format correctly the value of zero', () => {
    expect(formatCurrency(0)).toBe('R$ 0,00');
  });

  it('should format correctly an integer value', () => {
    expect(formatCurrency(3)).toBe('R$ 3,00');
  });

  it('should format correctly a decimal value with one decimal digit', () => {
    expect(formatCurrency(3.4)).toBe('R$ 3,40');
  });

  it('should format correctly a decimal value with more than 2 decimal digits', () => {
    expect(formatCurrency(3.3872478)).toBe('R$ 3,39');
  });

  it('should add points in the correct positions', () => {
    expect(formatCurrency(125.23)).toBe('R$ 125,23');
    expect(formatCurrency(1125.23)).toBe('R$ 1.125,23');
    expect(formatCurrency(911125.23)).toBe('R$ 911.125,23');
    expect(formatCurrency(23911125.23)).toBe('R$ 23.911.125,23');
  });

  it('should accept other currencies', () => {
    expect(formatCurrency(1125.23, 'US$')).toBe('US$ 1.125,23');
  });

  it('should accept negative values', () => {
    expect(formatCurrency(-1125.23)).toBe('R$ -1.125,23');
  });
});
