'use client'

import LoginForm from '@/components/auth/LoginForm';
import { redirectToGoogleAuth } from '@/services/auth';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Kolom Kiri - Informasi yang Ditingkatkan */}
      <div className="hidden lg:flex flex-col w-1/2 items-center justify-center bg-gradient-to-br from-[#C500D0] to-[#A200B4] p-12 text-white relative overflow-hidden">
        {/* Elemen dekoratif */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute -bottom-24 -right-12 w-96 h-96 bg-white/10 rounded-full" />

        <div className="z-10 text-left w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Selamat Datang Kembali!
          </h1>
          <blockquote className="pl-4 italic border-l-4 border-white/50">
            <p className="text-lg leading-relaxed text-gray-200 mb-4">
              Mari lanjutkan kolaborasi dan perjalanan belajarmu bersama komunitas programmer terhebat.
            </p>
          </blockquote>
          <p className="text-sm text-gray-200">Temukan inspirasi dan solusi bersama ribuan developer lainnya.</p>
        </div>
      </div>

      {/* Kolom Kanan - Form Masuk */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">

        <div className="max-w-md w-full">
          <div className="text-left mb-10">
            <h2 className="text-4xl font-bold text-gray-900">Masuk Akun</h2>
            <p className="text-gray-500 mt-2">
              Silakan masukkan detail akun Anda.
            </p>
          </div>

          <LoginForm />

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-200" />
            <span className="mx-4 text-sm font-medium text-gray-400">
              atau lanjutkan dengan
            </span>
            <hr className="flex-grow border-t border-gray-200" />
          </div>

          {/* Social login */}
          <div className="flex items-center justify-center space-x-4">
            <button
              type="button"
              onClick={redirectToGoogleAuth}
              className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg cursor-pointer transition-all"
            >
              <Image src="/icons/social/google.svg" alt="Google" width={24} height={24} />
            </button>
            <button
              type="button"
              className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg cursor-pointer transition-all"
            >
              <Image src="/icons/social/facebook.svg" alt="Facebook" width={24} height={24} />
            </button>
            <button
              type="button"
              className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg cursor-pointer transition-all"
            >
              <Image src="/icons/social/apple.svg" alt="Apple" width={24} height={24} />
            </button>
          </div>

          {/* Register link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Belum punya akun?{' '}
            <Link
              href="/auth/register"
              className="font-semibold text-[#C500D0] hover:text-[#A200B4]"
            >
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}