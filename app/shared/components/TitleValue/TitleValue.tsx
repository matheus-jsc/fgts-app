import React from 'react';
import { TitleValueProps } from './types';
import { 
  TitleText, 
  Value, 
} from './TitleValue.styles';

const formatCurrency = (value: string): { integer: string; decimal: string } => {
  const number = parseFloat(value) || 0;
  const formatted = number.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  
  const [integer, decimal] = formatted.split(',');
  
  return {
    integer: integer,
    decimal: decimal || '00'
  };
};

const TitleValue: React.FC<TitleValueProps> = ({ 
  value,
  color,
  style
}) => {
  const formattedValue = formatCurrency(value);

  return (
    <TitleText color={color} style={style}>
      <Value>R$ {formattedValue.integer},{formattedValue.decimal}</Value>
    </TitleText>
  );
};

export default TitleValue;
