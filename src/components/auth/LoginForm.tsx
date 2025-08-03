"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { loginUser } from '@/services/auth';
import { isAxiosError } from 'axios';
import { Input } from '@/components/ui/Input';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formError, setFormError] = useState('');

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setFormError('');
    setIsSubmitting(true);

    try {
      await loginUser({ email, password });
      router.push('/auth/dashboard');
    } catch (error) {
      if (isAxiosError(error)) {
        const serverError = error.response?.data;
        if (serverError?.errors) {
          setErrors(serverError.errors);
        } else {
          setFormError(serverError?.message || 'Terjadi kesalahan saat masuk.');
        }
      } else {
        setFormError('Tidak dapat terhubung ke server. Coba lagi nanti.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <Input
          Icon={Mail}
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Alamat Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />

        {/* Password */}
        <Input
          Icon={Lock}
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          rightIcon={
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          }
          error={errors.password}
        />

        {/* Forgot password */}
        <div className="flex items-center justify-end">
          <Link
            href="#"
            className="text-sm font-medium text-[#C500D0] hover:text-[#A200B4] transition-colors"
          >
            Lupa password?
          </Link>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#C500D0] hover:bg-[#A200B4] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Mencoba masuk...' : 'Masuk'}
        </button>

        {formError && (
          <p className="text-red-500 text-sm text-center">{formError}</p>
        )}
      </form>
  );
}