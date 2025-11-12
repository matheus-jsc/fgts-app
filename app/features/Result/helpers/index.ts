export const calculateFGTS = (fgtsBalance: number): number => {
  if (fgtsBalance <= 500) {
    return fgtsBalance * 0.5;
  } else if (fgtsBalance <= 1000) {
    return fgtsBalance * 0.4 + 50;
  } else if (fgtsBalance <= 5000) {
    return fgtsBalance * 0.3 + 150;
  } else if (fgtsBalance <= 10000) {
    return fgtsBalance * 0.2 + 650;
  } else if (fgtsBalance <= 15000) {
    return fgtsBalance * 0.15 + 1150;
  } else if (fgtsBalance <= 20000) {
    return fgtsBalance * 0.1 + 1900;
  } else {
    return fgtsBalance * 0.05 + 2900;
  }
};

export const currencyStringToNumber = (value: string): number => {
  if (!value) return 0;

  const cleaned = value
    .replace(/[^\d,.-]/g, '') 
    .replace(/\./g, '')       
    .replace(',', '.');

  const parsed = parseFloat(cleaned);

  return isNaN(parsed) ? 0 : parsed;
};
