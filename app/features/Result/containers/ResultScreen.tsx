import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
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

type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

export const ResultScreen = ({}: Props) => {
  return (
      <>
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
