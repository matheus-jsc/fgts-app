export interface FormData {
  name: string;
  phone: string;
  fgtsBalance: string;
  birthMonth: Date;
}

export interface FormContextType {
  formData: FormData;
  errors: Record<string, string>;
  handleChange: (field: keyof FormData, value: string | Date) => void;
  validateFormData: () => Promise<boolean>;
  clearForm: () => void;
}
