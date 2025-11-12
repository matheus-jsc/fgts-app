import * as yup from 'yup';
import { FormData } from '../entities';

export const validateForm = async (data: FormData) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Nome é obrigatório')
      .min(3, 'Nome deve ter pelo menos 3 caracteres')
      .matches(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras'),
      
    phone: yup
      .string()
      .required('Telefone é obrigatório')
      .matches(
        /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
        'Telefone inválido. Use o formato (99) 99999-9999'
      ),
      
    fgtsBalance: yup
      .string()
      .required('Saldo do FGTS é obrigatório')
      .test('valid-amount', 'Valor inválido', (value) => {
        if (!value) return false;
        const number = parseFloat(value.replace(/[^0-9,]/g, '').replace(',', '.'));
        return !isNaN(number) && number > 0;
      }),
      
    birthMonth: yup
      .date()
      .required('Mês de aniversário é obrigatório')
      .max(new Date(), 'Data não pode ser no futuro')
      .test('valid-month', 'Data inválida', (value) => {
        return value instanceof Date && !isNaN(value.getTime());
      })
  });

  try {
    await schema.validate(data, { abortEarly: false });
    return { isValid: true, errors: {} };
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      const errors = err.inner.reduce((acc, error) => {
        return {
          ...acc,
          [error.path || '']: error.message,
        };
      }, {} as Record<string, string>);
      
      return { isValid: false, errors };
    }
    return { isValid: false, errors: { general: 'Ocorreu um erro na validação' } };
  }
};
