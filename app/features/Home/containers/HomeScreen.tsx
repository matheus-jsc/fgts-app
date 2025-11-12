import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Masks } from 'react-native-mask-input';

import { Icons } from '@shared/utils';
import { Input, Button, MonthPicker } from '@shared/components';

import { Background } from '../components';
import { useApp } from '../contexts/AppContext';

import {
  MainContainer,
  Container,
  Header,
  LogoContainer,
  Title,
  Subtitle,
  Form,
  FormGroup,
  ButtonContainer,
  ErrorText,
} from './HomeScreen.styles';

export const HomeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const {
    ui: { isLoading, error },
    setError,
    clearError,
    formData,
    errors,
    handleChange,
    validateForm: validateFormData
  } = useApp();

  const handleSubmit = async (): Promise<void> => {
    try {
      clearError();
      const isValid = await validateFormData();
      
      if (isValid) {        
        navigation.navigate('Result', {
          name: formData.name,
          fgtsBalance: formData.fgtsBalance
        });
      }
    } catch (error) {
      console.error('Erro ao processar o formulário:', error);
      setError('Ocorreu um erro ao processar o formulário. Por favor, tente novamente.');
    }
  };

  return (
    <MainContainer>
      <Background>
        <KeyboardAvoidingView 
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <StatusBar barStyle='light-content' />
          <ScrollView 
            style={{ flex: 1, backgroundColor: 'transparent' }}
            contentContainerStyle={{
              flexGrow: 1,
              backgroundColor: 'transparent',
            }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <Container>
              <Header>
                <LogoContainer>
                  <Icons.smile size={30} color={theme.colors.icon.primary} />
                </LogoContainer>
                <Title>{'Antecipe seu\nSaque-Aniversário'}</Title>
                <Subtitle>Use uma grana que já é sua e saia do aperto</Subtitle>
              </Header>
              <Form>
                <FormGroup>
                  <Input
                    label="Qual seu nome?"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChangeText={(text: string) => handleChange('name', text)}
                    error={errors.name}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    label="Qual seu telefone?"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChangeText={(text: string) => handleChange('phone', text)}
                    mask={Masks.BRL_PHONE}
                    keyboardType="phone-pad"
                    error={errors.phone}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    label="Qual seu saldo?"
                    placeholder="R$ 0,00"
                    value={formData.fgtsBalance}
                    onChangeText={(text: string) => handleChange('fgtsBalance', text)}
                    mask={Masks.BRL_CURRENCY}
                    keyboardType="numeric"
                    error={errors.fgtsBalance}
                  />
                </FormGroup>
                <FormGroup>
                  <MonthPicker
                    label="Qual seu mês de aniversário?"
                    selectedDate={formData.birthMonth}
                    onSelectDate={(date: Date) => handleChange('birthMonth', date)}
                  />
                </FormGroup>
                <ButtonContainer>
                  <Button
                    title={isLoading ? 'Validando...' : 'Ver Proposta'}
                    onPress={handleSubmit}
                    fetching={isLoading}
                    disabled={isLoading}
                  />
                  {error && (
                    <ErrorText>{error}</ErrorText>
                  )}
                </ButtonContainer>
              </Form>
            </Container>
          </ScrollView>
        </KeyboardAvoidingView>
      </Background>
    </MainContainer>
  );
};
