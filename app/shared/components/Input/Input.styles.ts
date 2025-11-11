import styled from 'styled-components/native';
import { TextInput as RNTextInput } from 'react-native';

export const Container = styled.View`
  margin-bottom: 16px;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #4B5563;
  margin-bottom: 8px;
  font-family: 'Inter-Medium';
`;

export const InputContainer = styled.View<{ isFocused: boolean; hasError: boolean }>`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({ isFocused, hasError }) => 
    hasError ? '#EF4444' : isFocused ? '#3B82F6' : '#D1D5DB'};
  background-color: #FFFFFF;
  padding: 0 12px;
  height: 48px;
`;

export const InputField = styled(RNTextInput)`
  flex: 1;
  font-size: 16px;
  color: #111827;
  padding: 12px 0;
  font-family: 'Inter-Regular';
`;

export const ErrorText = styled.Text`
  font-size: 12px;
  color: #EF4444;
  margin-top: 4px;
  font-family: 'Inter-Regular';
`;
