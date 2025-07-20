"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { isAxiosError } from 'axios';
import { registerUser, redirectToGoogleAuth } from '@/services/auth';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formError, setFormError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setFormError('');
    setIsSubmitting(true);

    try {
      await registerUser({ name, email, password });
      router.push('/auth/login');
    } catch (error) {
      if (isAxiosError(error)) {
        const serverError = error.response?.data;
        if (serverError && serverError.errors) {
          setErrors(serverError.errors);
        } else {
          setFormError(serverError?.message || 'Terjadi kesalahan saat mendaftar.');
        }
      } else {
        setFormError('Tidak dapat terhubung ke server. Coba lagi nanti.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Kolom Kiri - Informasi & Branding */}
      <div className="hidden lg:flex flex-col w-1/2 items-center justify-center bg-gradient-to-br from-[#C500D0] to-[#A200B4] p-12 text-white relative overflow-hidden">
        {/* Elemen dekoratif */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute -bottom-24 -right-12 w-96 h-96 bg-white/10 rounded-full" />

        <div className="z-10 text-left w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Bergabunglah dengan Mirach Community
          </h1>
          <blockquote className="pl-4 italic border-l-4 border-white/50">
            <p className="text-lg leading-relaxed text-gray-200">
              Di sini, setiap pertanyaan dihargai dan setiap proyek adalah kesempatan. Temukan teman diskusimu di komunitas pemrograman terbesar di Indonesia.
            </p>
          </blockquote>
        </div>
      </div>

      {/* Kolom Kanan - Form Pendaftaran */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="max-w-md w-full">
          <div className="text-left mb-10">
            <h2 className="text-4xl font-bold text-gray-900">Buat Akun Baru</h2>
            <p className="text-gray-500 mt-2">Satu langkah lagi untuk memulai petualanganmu.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Input Name */}
            <div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Nama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C500D0] focus:border-transparent transition-all"
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1 pl-1">{errors.name}</p>}
            </div>

            {/* Input Email */}
            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Alamat Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C500D0] focus:border-transparent transition-all"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1 pl-1">{errors.email}</p>}
            </div>

            {/* Input Password */}
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg hide-password-toggle focus:outline-none focus:ring-2 focus:ring-[#C500D0] focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1 pl-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#C500D0] hover:bg-[#A200B4] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Mendaftarkan...' : 'Daftar'}
            </button>

            {/* Error Umum */}
            {formError && <p className="text-red-500 text-sm text-center">{formError}</p>}

          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-200" />
            <span className="mx-4 text-sm font-medium text-gray-400">atau daftar dengan</span>
            <hr className="flex-grow border-t border-gray-200" />
          </div>

          {/* Tombol Media Sosial */}
          <div className="flex items-center justify-center space-x-4">
            <button
              type="button"
              onClick={redirectToGoogleAuth}
              className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg cursor-pointer transition-all">
              <Image src="/icons/social/google.svg" alt="Google" width={24} height={24} />
            </button>

            <button type="button" className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg cursor-pointer transition-all">
              <Image src="/icons/social/facebook.svg" alt="Facebook" width={24} height={24} />
            </button>

            <button type="button" className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg cursor-pointer transition-all">
              <Image src="/icons/social/apple.svg" alt="Apple" width={24} height={24} />
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Sudah punya akun?{' '}
            <Link href="/auth/login" className="font-semibold text-[#C500D0] hover:text-[#A200B4]">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}