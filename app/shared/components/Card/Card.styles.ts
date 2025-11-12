import styled from 'styled-components/native';
import { View, Text } from 'react-native';

interface ContainerProps {
  highlight?: boolean;
}

export const Container = styled(View)<ContainerProps>`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  border-width: 1px;
  border-color: ${(props: ContainerProps) => (props.highlight ? '#3B82F6' : '#E5E7EB')};
  shadow-color: #000000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 4px;
  elevation: 2;
`;

export const Title = styled(Text)`
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 4px;
  font-family: 'Inter-Regular';
`;

export const Amount = styled(Text)`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
  font-family: 'Inter-SemiBold';
`;

export const Subtitle = styled(Text)`
  font-size: 12px;
  color: #6B7280;
  font-family: 'Inter-Regular';
`;
