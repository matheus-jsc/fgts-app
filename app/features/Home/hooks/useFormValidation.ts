import { useCallback } from 'react';
import { validateForm as validateFormSchema } from '../validations/schema';
import { validatePhoneNumber } from '../services/phoneValidationService';

type FormData = {
  name: string;
  phone: string;
  fgtsBalance: string;
  birthMonth: Date;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type UseFormValidationProps = {
  formData: FormData;
  setErrors: (errors: FormErrors) => void;
  showLoading: () => void;
  hideLoading: () => void;
  setError: (error: string | null) => void;
  clearError: () => void;
};

export const useFormValidation = ({
  formData,
  setErrors,
  showLoading,
  hideLoading,
  setError,
  clearError,
}: UseFormValidationProps) => {
  const validateForm = useCallback(async (): Promise<boolean> => {
    try {
      const validationResult = await validateFormSchema(formData);
      
      if (!validationResult.isValid) {
        setErrors(validationResult.errors);
        return false;
      }

      showLoading();
      clearError();
      
      const isPhoneValid = await validatePhoneNumber(formData.phone);
      
      if (!isPhoneValid) {
        setErrors({
          phone: 'Número de telefone inválido ou não encontrado'
        });
        return false;
      }

      setErrors({});
      return true;
    } catch {
      setError('Ocorreu um erro ao validar o formulário. Tente novamente.');
      return false;
    } finally {
      hideLoading();
    }
  }, [formData, setErrors, showLoading, hideLoading, setError, clearError]);

  return {
    validateForm,
  };
};
