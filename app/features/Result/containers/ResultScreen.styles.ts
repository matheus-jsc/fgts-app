import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Theme } from '../../../theme/entities';

const screenHeight = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
`;

export const ResultImage = styled.ImageBackground`
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const Content = styled.View`
  flex: ${screenHeight > 800 ? 0.4 : 0.6};
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  justify-content: flex-start;
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.xl}px;
  gap: ${({ theme }: { theme: Theme }) => theme.spacing.sm}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }: { theme: Theme }) => theme.typography.fonts.bold};
  font-size: ${({ theme }: { theme: Theme }) => theme.typography.h1.fontSize}px;
  line-height: ${({ theme }: { theme: Theme }) => theme.typography.h0.lineHeight}px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text.primary};
  text-align: left;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }: { theme: Theme }) => theme.typography.fonts.regular};
  font-size: 18px;
  line-height: ${({ theme }: { theme: Theme }) => theme.typography.body.lineHeight}px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text.secondary};
  text-align: left;
`;

export const Footer = styled.View`
  flex:1;
  justify-content: flex-end;
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.spacing.lg}px;
`;

export const FooterText = styled.Text`
  text-align: left;
  font-family: ${({ theme }: { theme: Theme }) => theme.typography.fonts.regular};
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text.secondary};
`;
