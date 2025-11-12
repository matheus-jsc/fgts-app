import React, { useState, useCallback } from 'react';
import { Modal, View, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useTheme } from 'styled-components/native';
import { Icons } from '@shared/utils';
import { 
  Container, 
  Label, 
  Button, 
  ButtonText, 
  ModalContainer, 
  ModalContent, 
  ModalHeader, 
  ModalTitle, 
  MonthButton, 
  MonthText, 
  MonthsGrid,
  IconContainer,
  DragHandle
} from './MonthPicker.styles';
import { MonthPickerProps } from './props';

const Months = [
  'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'
];

const MonthPicker: React.FC<MonthPickerProps> = ({
  selectedDate,
  onSelectDate,
  label,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  
  const handleMonthSelect = useCallback((monthIndex: number) => {
    setSelectedMonth(monthIndex);
    const newDate = new Date(currentYear, monthIndex, 1);
    onSelectDate(newDate);
    setModalVisible(false);
  }, [currentYear, onSelectDate]);

  const handleBackdropPress = useCallback((e: GestureResponderEvent) => {
    if (e.target === e.currentTarget) {
      setModalVisible(false);
    }
  }, []);

  const formatDisplayDate = (date: Date) => {
    const month = format(date, 'MMMM', { locale: ptBR });
    return month.charAt(0).toUpperCase() + month.slice(1);
  };

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Button onPress={() => setModalVisible(true)}>
        <IconContainer>
          <Icons.chevronDown size={12} color={theme.colors.icon.secondary} />
        </IconContainer>
        <ButtonText>{formatDisplayDate(selectedDate)}</ButtonText>
        <IconContainer>
          <Icons.calendar size={12} color={theme.colors.icon.secondary} />
        </IconContainer>
      </Button>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContainer>
          <TouchableWithoutFeedback onPress={handleBackdropPress}>
            <View style={{ flex: 1 }} />
          </TouchableWithoutFeedback>
          <ModalContent>
            <DragHandle />
            <ModalHeader>
              <ModalTitle>Selecione o mês</ModalTitle>
            </ModalHeader>
            <MonthsGrid>
              {Months.map((month, index) => {
                const isSelected = selectedMonth === index;
                return (
                  <MonthButton
                    key={month}
                    onPress={() => handleMonthSelect(index)}
                    isSelected={isSelected}
                  >
                    <MonthText 
                      isSelected={isSelected} 
                    >
                      {month}
                    </MonthText>
                  </MonthButton>
                );
              })}
            </MonthsGrid>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
};


export default MonthPicker;
