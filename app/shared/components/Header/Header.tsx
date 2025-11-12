import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, BackButton, BackIcon, RightContent } from './Header.styles';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = true,
  rightContent,
  style,
  onBackPress,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <Container style={style}>
      <View style={{ width: 40 }}>
        {showBackButton && (
          <BackButton onPress={handleBackPress}>
            <BackIcon name="arrow-back" size={24} color="#111827" />
          </BackButton>
        )}
      </View>

      <Title>{title}</Title>

      <RightContent>
        {rightContent || <View style={{ width: 40 }} />}
      </RightContent>
    </Container>
  );
};

export default Header;
