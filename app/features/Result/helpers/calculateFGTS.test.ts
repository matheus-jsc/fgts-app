import { calculateFGTS } from './index';

describe('calculateFGTS', () => {
  test('deve calcular corretamente para valores até R$ 500,00', () => {
    // 50% do valor
    expect(calculateFGTS(0)).toBe(0);
    expect(calculateFGTS(100)).toBe(50);
    expect(calculateFGTS(250)).toBe(125);
    expect(calculateFGTS(500)).toBe(250);
  });

  test('deve calcular corretamente para valores entre R$ 500,01 e R$ 1.000,00', () => {
    // 40% do valor + R$ 50,00
    expect(calculateFGTS(500.01)).toBeCloseTo(500.01 * 0.4 + 50, 2);
    expect(calculateFGTS(750)).toBe(750 * 0.4 + 50);
    expect(calculateFGTS(1000)).toBe(1000 * 0.4 + 50);
  });

  test('deve calcular corretamente para valores entre R$ 1.001,00 e R$ 5.000,00', () => {
    // 30% do valor + R$ 150,00
    expect(calculateFGTS(1001)).toBeCloseTo(1001 * 0.3 + 150, 2);
    expect(calculateFGTS(3000)).toBe(3000 * 0.3 + 150); 
    expect(calculateFGTS(5000)).toBe(5000 * 0.3 + 150);
  });

  test('deve calcular corretamente para valores entre R$ 5.001,00 e R$ 10.000,00', () => {
    // 20% do valor + R$ 650,00
    expect(calculateFGTS(5001)).toBeCloseTo(5001 * 0.2 + 650, 2);
    expect(calculateFGTS(7500)).toBe(7500 * 0.2 + 650);
    expect(calculateFGTS(10000)).toBe(10000 * 0.2 + 650);
  });

  test('deve calcular corretamente para valores entre R$ 10.001,00 e R$ 15.000,00', () => {
    // 15% do valor + R$ 1.150,00
    expect(calculateFGTS(10001)).toBeCloseTo(10001 * 0.15 + 1150, 2);
    expect(calculateFGTS(12500)).toBe(12500 * 0.15 + 1150);
    expect(calculateFGTS(15000)).toBe(15000 * 0.15 + 1150);
  });

  test('deve calcular corretamente para valores entre R$ 15.001,00 e R$ 20.000,00', () => {
    // 10% do valor + R$ 1.900,00
    expect(calculateFGTS(15001)).toBeCloseTo(15001 * 0.1 + 1900, 2);
    expect(calculateFGTS(17500)).toBe(17500 * 0.1 + 1900);
    expect(calculateFGTS(20000)).toBe(20000 * 0.1 + 1900);
  });

  test('deve calcular corretamente para valores acima de R$ 20.000,00', () => {
    // 5% do valor + R$ 2.900,00
    expect(calculateFGTS(20001)).toBeCloseTo(20001 * 0.05 + 2900, 2);
    expect(calculateFGTS(25000)).toBe(25000 * 0.05 + 2900);
    expect(calculateFGTS(50000)).toBe(50000 * 0.05 + 2900);
  });
});
