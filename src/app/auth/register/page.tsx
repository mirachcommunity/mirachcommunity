"use client";

import Link from 'next/link';
import React from 'react';
import RegisterForm from '@/components/auth/RegisterForm';
import SocialLinks from '@/components/auth/SocialLinks';

export default function Register() {
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

          <RegisterForm />
          
          {/* Social login */}
          <SocialLinks text="atau daftar dengan" />

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