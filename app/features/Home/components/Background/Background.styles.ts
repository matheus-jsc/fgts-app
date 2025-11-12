import { Dimensions } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';

const screenHeight = Dimensions.get('window').height;

interface ThemedProps {
  theme: DefaultTheme;
}

export const TopContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${screenHeight / 2}px;
  background-color: ${({ theme }: ThemedProps) => theme.colors.primary};
`;

export const BottomContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${screenHeight / 2}px;
  background-color: ${({ theme }: ThemedProps) => theme.colors.background};
`;
