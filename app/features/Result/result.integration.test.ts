
import { calculateFGTS, currencyStringToNumber } from './helpers';

describe('Result Integration Test', () => {
  test('deve calcular corretamente o valor do FGTS para R$ 1.000,00', () => {
    const fgtsValue = 'R$ 1.000,00';
    const expectedValue = 450;

    const value = calculateFGTS(currencyStringToNumber(fgtsValue));
    
    expect(value).toEqual(expectedValue);
  });

  test('deve calcular corretamente o valor do FGTS para R$ 5.000,00', () => {
    const fgtsValue = 'R$ 5.000,00';
    const expectedValue = 1650;

    const value = calculateFGTS(currencyStringToNumber(fgtsValue));
    
    expect(value).toEqual(expectedValue);
  });

  test('deve calcular corretamente o valor do FGTS para R$ 15.000,00', () => {
    const fgtsValue = 'R$ 15.000,00';
    const expectedValue = 3400;

    const value = calculateFGTS(currencyStringToNumber(fgtsValue));
    
    expect(value).toEqual(expectedValue);
  });

  test('deve calcular corretamente o valor do FGTS para R$ 25.000,00', () => {
    const fgtsValue = 'R$ 25.000,00';
    const expectedValue = 4150;

    const value = calculateFGTS(currencyStringToNumber(fgtsValue));
    
    expect(value).toEqual(expectedValue);
  });
});
