"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { loginUser } from '@/services/auth';
import { Input } from '@/components/ui/Input';
import { useForm } from '@/hooks/useForm';
import { Button } from '@/components/ui/Button';

export default function LoginForm() {

  const {
    formData,
    isSubmitting,
    errors,
    handleChange,
    handleSubmit,
  } = useForm({ email: '', password: '' }, loginUser, 'Login berhasil!', '/auth/dashboard');

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        Icon={Mail}
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="Alamat Email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <Input
        Icon={Lock}
        id="password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        autoComplete="current-password"
        required
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
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

      <div className="flex items-center justify-end">
        <Link
          href="#"
          className="text-sm font-medium text-[#C500D0] hover:text-[#A200B4] transition-colors"
        >
          Lupa password?
        </Link>
      </div>

      <Button
        type="submit"
        isSubmitting={isSubmitting}
        submittingText="Mencoba masuk..."
      >
        Masuk
      </Button>
    </form>
  );
}