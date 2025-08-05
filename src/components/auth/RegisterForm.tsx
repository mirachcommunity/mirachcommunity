"use client";

import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { registerUser } from '@/services/auth';
import { Input } from '@/components/ui/Input';
import { useForm } from '@/hooks/useForm';
import { Button } from '@/components/ui/Button';

export default function Register() {

  const {
    formData,
    isSubmitting,
    errors,
    handleChange,
    handleSubmit,
  } = useForm({name: '', email: '', password: ''}, registerUser, 'Verifikasi email berhasil terkirim ke email anda', '/auth/login')

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        Icon={User}
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        required
        placeholder="Nama"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

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

      <Button
        type="submit" 
        isSubmitting={isSubmitting} 
        submittingText="Mendaftarkan..."
      >
        Daftar
      </Button>
    </form>
  );
}