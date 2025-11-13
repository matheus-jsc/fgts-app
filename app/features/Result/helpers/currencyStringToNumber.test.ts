import { currencyStringToNumber } from './index';

describe('currencyStringToNumber', () => {
  test('deve retornar 0 para valores vazios ou inválidos', () => {
    expect(currencyStringToNumber('')).toBe(0);
    expect(currencyStringToNumber('   ')).toBe(0);
    expect(currencyStringToNumber('abc')).toBe(0);
    expect(currencyStringToNumber('R$ ')).toBe(0);
    expect(currencyStringToNumber(undefined as any)).toBe(0);
  });

  test('deve converter corretamente números inteiros', () => {
    expect(currencyStringToNumber('0')).toBe(0);
    expect(currencyStringToNumber('1')).toBe(1);
    expect(currencyStringToNumber('1000')).toBe(1000);
  });

  test('deve remover pontos de milhar', () => {
    expect(currencyStringToNumber('1.000')).toBe(1000);
    expect(currencyStringToNumber('10.000,50')).toBe(10000.5);
    expect(currencyStringToNumber('1.234.567,89')).toBe(1234567.89);
  });

  test('deve converter vírgula em ponto decimal', () => {
    expect(currencyStringToNumber('0,5')).toBe(0.5);
    expect(currencyStringToNumber('100,50')).toBe(100.5);
    expect(currencyStringToNumber('1.234,56')).toBe(1234.56);
  });

  test('deve remover caracteres não numéricos', () => {
    expect(currencyStringToNumber('R$ 1.234,56')).toBe(1234.56);
    expect(currencyStringToNumber('R$1.234,56')).toBe(1234.56);
    expect(currencyStringToNumber('R$ 1.234,56 reais')).toBe(1234.56);
    expect(currencyStringToNumber('Preço: 1.234,56')).toBe(1234.56);
  });
});
