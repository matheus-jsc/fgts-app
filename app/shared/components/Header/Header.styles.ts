import styled from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #FFFFFF;
  border-bottom-width: 1px;
  border-bottom-color: #F3F4F6;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 16px;
  font-family: 'Inter-SemiBold';
`;

export const BackButton = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const BackIcon = styled(Ionicons)`
  color: #374151;
`;

export const RightContent = styled(View)`
  min-width: 40px;
  align-items: flex-end;
`;
