export interface MonthPickerProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  label?: string;
  minimumDate?: Date;
  maximumDate?: Date;
}
