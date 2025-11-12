import React, { createContext, useContext, useCallback, useState } from 'react';
import { useFormValidation } from '../hooks/useFormValidation';
import { FormData } from '../entities';

type UIState = {
  isLoading: boolean;
  error: string | null;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type AppContextType = {
  // UI State
  ui: UIState;
  showLoading: () => void;
  hideLoading: () => void;
  setError: (error: string | null) => void;
  clearError: () => void;
  
  // Form State
  formData: FormData;
  errors: FormErrors;
  handleChange: (field: keyof FormData, value: string | Date) => void;
  validateForm: () => Promise<boolean>;
  clearForm: () => void;
};

const initialFormData: FormData = {
  name: '',
  phone: '',
  fgtsBalance: '',
  birthMonth: new Date(),
};

const initialUIState: UIState = {
  isLoading: false,
  error: null,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [ui, setUI] = useState<UIState>(initialUIState);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  // UI Actions
  const showLoading = useCallback(() => 
    setUI(prev => ({ ...prev, isLoading: true })), []);
  
  const hideLoading = useCallback(() => 
    setUI(prev => ({ ...prev, isLoading: false })), []);
  
  const setError = useCallback((error: string | null) => 
    setUI(prev => ({ ...prev, error })), []);
  
  const clearError = useCallback(() => 
    setUI(prev => ({ ...prev, error: null })), []);

  // Form Actions
  const handleChange = useCallback((field: keyof FormData, value: string | Date) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  }, [errors]);

  const { validateForm } = useFormValidation({
    formData,
    setErrors,
    showLoading,
    hideLoading,
    setError,
    clearError,
  });

  const clearForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    clearError();
  }, [clearError]);

  return (
    <AppContext.Provider
      value={{
        ui,
        showLoading,
        hideLoading,
        setError,
        clearError,
        formData,
        errors,
        handleChange,
        validateForm,
        clearForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp deve ser usado dentro de um AppProvider');
  }
  return context;
};

export * from './AppContext';
