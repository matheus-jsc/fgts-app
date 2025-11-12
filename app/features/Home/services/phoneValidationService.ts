import { BASE_URL, API_KEY } from '@env';

type PhoneValidationResponse = {
  phone_number: string;
  phone_validation: {
    is_valid: boolean;
    line_status: string;
  };
  error?: {
    message: string;
    code: string;
    details: {
      phone: string[];
    };
  };
};

export const validatePhoneNumber = async (phone: string): Promise<boolean> => {
  try {
    const phoneNumber = phone.replace(/\D/g, '');
    
    if (phoneNumber.length < 10) {
      throw new Error('Número de telefone muito curto');
    }
    const response = await fetch(
      `${BASE_URL}?api_key=${API_KEY}&phone=${phoneNumber}`
    );

    if (!response.ok) {
      throw new Error('Erro ao validar o número de telefone');
    }

    const data: PhoneValidationResponse = await response.json();

    if (data.error) {
      throw new Error(data.error.message || 'Erro ao validar o número de telefone');
    }

    if (data.phone_validation && data.phone_validation.is_valid) {
      return true;
    }

    return false;
  } catch (error) {
    console.error('Erro na validação do telefone:', error);
    throw error;
  }
};
