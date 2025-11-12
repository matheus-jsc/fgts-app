import React from 'react';
import { StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'app/navigation/types';
import { Images } from '../../../theme';
import { TitleValue } from '../../../shared/components';
import { calculateFGTS, currencyStringToNumber } from '../helpers';

import {
  Title,
  ResultImage,
  Content,
  Subtitle,
  FooterText,
  Footer
} from './ResultScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

export const ResultScreen = ({ route }: Props) => {
  const { name, fgtsBalance } = route.params;
  const result = calculateFGTS(currencyStringToNumber(fgtsBalance));
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ResultImage source={Images.results} resizeMode="cover" />
      <Content>
        <Title>{`Olá ${name}!`}</Title>
        <Subtitle>Você pode receber até</Subtitle>
        <TitleValue value={result} />
        <Footer>
          <FooterText>
            *Esta simulação traz valores aproximados. Para calcular o valor exato, entre em contato com o Smile Co. ou consulte seu saldo no app do FGTS.
          </FooterText>
        </Footer>
      </Content>
    </>
  );
};
