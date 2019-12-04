import removeLocation, { removeLocationPattern } from '../removeLocation';

describe('removeLocation():', () => {
  it('should remove locations appropriately', () => {
    expect(removeLocation('SP - São Paulo - Unisa', { state: 'SP', city: 'São Paulo' })).toBe(
      'Unisa',
    );
    expect(
      removeLocation(' --  RJ-()()   Niterói --- UFF   -', { state: 'RJ', city: 'Niterói' }),
    ).toBe('UFF');
    expect(
      removeLocation(' --  RJ-()()   Niterói --- UFF | Campus Legal   -', {
        state: 'RJ',
        city: 'Niterói',
      }),
    ).toBe('UFF - Campus Legal');
  });

  it("should return the string unchanged if it doesn't have the location in it", () => {
    expect(removeLocation('Campus West Plaza', { state: 'SP', city: 'São Paulo' })).toBe(
      'Campus West Plaza',
    );
    expect(removeLocation('SP - São Paulo - USP', { state: 'MG', city: 'Belo Horizonte' })).toBe(
      'SP - São Paulo - USP',
    );
    expect(removeLocation('SP - São Paulo - USP', { state: 'SP', city: 'Campinas' })).toBe(
      'São Paulo - USP',
    );
  });

  it('should remove locations appropriately without state', () => {
    expect(removeLocation('São Paulo - Unisa', { city: 'São Paulo' })).toBe('Unisa');
    expect(removeLocation('-()()   Niterói --- UFF   -', { city: 'Niterói' })).toBe('UFF');
  });

  it('should remove locations appropriately without city', () => {
    expect(removeLocation('SP - São Paulo - Unisa', { state: 'SP' })).toBe('São Paulo - Unisa');
    expect(removeLocation(' --  RJ-()()   Niterói --- UFF   -', { state: 'RJ' })).toBe(
      'Niterói - UFF',
    );
    expect(removeLocation('Campus de Piracicaba', { state: 'SP' })).toBe('Campus de Piracicaba');
    expect(removeLocation('São José do Rio Preto II', { state: 'SP' })).toBe(
      'São José do Rio Preto II',
    );
  });

  it('should return empty string if all content has been removed', () => {
    expect(removeLocation('São Paulo - SP ', { state: 'SP', city: 'São Paulo' })).toBe('');
    expect(removeLocation('Nova Friburgo', { state: 'RJ', city: 'Nova Friburgo' })).toBe('');
  });

  it('should return locations appropriately with pattern rules', () => {
    expect(
      removeLocation('SP - São Paulo - Campus Indianópolis', { pattern: removeLocationPattern }),
    ).toBe('Campus Indianópolis');

    expect(removeLocation('RJ - Rio de Janeiro - Polo 3', { pattern: removeLocationPattern })).toBe(
      'Polo 3',
    );

    expect(removeLocation('Pap Americana - Sp', { pattern: removeLocationPattern })).toBe(
      'Pap Americana - Sp',
    );

    expect(removeLocation('SP - Sorocaba', { pattern: removeLocationPattern })).toBe('');
  });
});
