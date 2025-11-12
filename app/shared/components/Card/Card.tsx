import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import { Container, Title, Amount, Subtitle } from './Card.styles';

export interface CardProps extends ViewProps {
  title: string;
  amount: string;
  subtitle?: string;
  highlight?: boolean;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  amount,
  subtitle,
  highlight = false,
  children,
  style,
  ...rest
}) => {
  return (
    <Container style={style} highlight={highlight} {...rest}>
      <View>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </View>
      {children}
    </Container>
  );
};

export default Card;
