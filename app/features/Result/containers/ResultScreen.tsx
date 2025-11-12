import React from 'react';
import { StatusBar } from 'react-native';
import {
  Title,
  ResultImage,
  Content,
  Subtitle,
  FooterText,
  Footer
} from './ResultScreen.styles';
import { Images } from '../../../theme';
import { TitleValue } from '../../../shared/components';

export const ResultScreen = () => {
  return (
      <>
      <StatusBar barStyle='dark-content' />
        <ResultImage source={Images.results} resizeMode="cover"/>
        <Content>
          <Title>{'Olá Matheus!'}</Title>
          <Subtitle>{'Você pode receber até'}</Subtitle>
          <TitleValue value={'12500.65'}/>
          <Footer>
            <FooterText>*Esta simulação traz valores aproximados. Para calcular o valor exato, entre em contato com o Smile Co. ou consulte seu saldo no app do FGTS.</FooterText>
          </Footer>
        </Content>
      </>
  );
};
