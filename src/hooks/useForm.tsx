import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export type FormErrors = Record<string, string>;

export interface FormReturn<T> {
  formData: T;
  setFormData: React.Dispatch<React.SetStateAction<T>>;
  isSubmitting: boolean;
  formError: string;
  errors: FormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const useForm = <T extends Record<string, unknown>>(
  initialState: T,
  serviceFn: (data: T) => Promise<unknown>,
  successRedirect?: string
): FormReturn<T> => {
  const [formData, setFormData] = useState<T>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ 
      ...prev, 
      [e.target.name]: e.target.value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setFormError('');
    setIsSubmitting(true);

    try {
      await serviceFn(formData);
      if (successRedirect) {
        router.push(successRedirect);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        const serverError = error.response?.data;
        if (serverError?.errors) {
          setErrors(serverError.errors as FormErrors);
        } else {
          setFormError(serverError?.message || 'Terjadi kesalahan.');
        }
      } else {
        setFormError('Tidak dapat terhubung ke server. Coba lagi nanti.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    formError,
    errors,
    handleChange,
    handleSubmit,
  };
};