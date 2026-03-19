// src/hooks/useForm.tsx

import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Swal from 'sweetalert2';

export type FormErrors = Record<string, string>;

export interface FormReturn<T> {
  formData: T;
  setFormData: React.Dispatch<React.SetStateAction<T>>;
  isSubmitting: boolean;
  errors: FormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const useForm = <T extends Record<string, unknown>>(
  initialState: T,
  serviceFn: (data: T) => Promise<unknown>,
  titleIsSuccess?: string,
  successRedirect?: string
): FormReturn<T> => {
  const [formData, setFormData] = useState<T>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);

    try {
      await serviceFn(formData);

      await Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: titleIsSuccess || 'Operasi Berhasil!',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        customClass: {
          timerProgressBar: 'swal2-progress-bar-success',
        }
      });

      if (successRedirect) {
        router.push(successRedirect);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        const serverError = error.response?.data;
        if (serverError?.errors) {
          setErrors(serverError.errors as FormErrors);
        } else {
          const errorMessage = serverError?.message || 'Terjadi kesalahan.';
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Gagal!',
            text: errorMessage,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            customClass: {
              timerProgressBar: 'swal2-progress-bar-error',
            }
          });
        }
      } else {
        const genericError = 'Tidak dapat terhubung ke server. Coba lagi nanti.';
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Oops...',
          text: genericError,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          customClass: {
            timerProgressBar: 'swal2-progress-bar-error',
          }
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    errors,
    handleChange,
    handleSubmit,
  };
};