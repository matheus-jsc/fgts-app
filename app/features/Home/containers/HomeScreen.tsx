import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StatusBar, Alert } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Icons } from '@shared/utils';
import { Masks } from 'react-native-mask-input';

import { Input, Button, MonthPicker } from '@shared/components';
import { Background } from '../components';
import { validateForm } from '../validations/schema';
import { FormData } from '../entities';

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
} from './HomeScreen.styles';

export const HomeScreen = () => {
  const theme = useTheme();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    fgtsBalance: '',
    birthMonth: new Date(),
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof FormData, value: string | Date) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  const handleSubmit = async (): Promise<void> => {
    try {
      const { isValid, errors } = await validateForm(formData);
      
      if (!isValid) {
        setErrors(errors);
        return;
      }
      
      setErrors({});
      
      const amount = parseFloat(formData.fgtsBalance.replace(/[^0-9,-]+/g, '').replace(',', '.')) || 0;
      
      navigation.navigate('Result', {
        amount,
        birthDate: formData.birthMonth.toISOString(),
        hasBirthdayThisYear: new Date().getMonth() >= formData.birthMonth.getMonth()
      });
    } catch {
      Alert.alert('Erro', 'Ocorreu um erro ao processar o formulário. Tente novamente.');
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
                  <Icons.smile size={30} color={theme.colors.surface} />
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
                    title="Ver Proposta"
                    onPress={handleSubmit}
                  />
                </ButtonContainer>
              </Form>
            </Container>
          </ScrollView>
        </KeyboardAvoidingView>
      </Background>
    </MainContainer>
  );
};
