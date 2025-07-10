import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Login() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Kolom Kiri - Informasi */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-br from-[#C500D0] to-[#A200B4] p-12 text-white relative">
        <div className="z-10 text-left w-full max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            Masuk ke <br /> Mirach Community
          </h1>
          <p className="text-lg leading-relaxed">
            Selamat datang kembali! Mari lanjutkan kolaborasi dan perjalanan belajarmu bersama komunitas programmer terhebat.
          </p>
        </div>
      </div>

      {/* Kolom Kanan - Form Masuk */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-left mb-8">
            <p className="text-gray-600">Selamat Datang Kembali</p>
            <h2 className="text-3xl font-bold text-gray-900">Masuk</h2>
          </div>

          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Alamat Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C500D0] focus:border-[#C500D0] transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Link href="#" className="text-sm text-[#C500D0] hover:underline">
                  Lupa password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C500D0] focus:border-[#C500D0] transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C500D0] hover:bg-[#A200B4] text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              Masuk
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-sm text-gray-500">atau</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Tombol Media Sosial */}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="flex-grow flex items-center justify-center space-x-2 w-full bg-[#FDD3FF] hover:bg-[#f3c5ff] text-[#C500D0] py-2 px-4 rounded-lg transition-colors duration-300"
            >
              <Image src="/icons/social/google.svg" alt="Google" width={20} height={20} />
              <span>Masuk dengan Google</span>
            </button>
            <button type="button" className="flex-shrink-0 p-3 bg-[#FDD3FF] hover:bg-[#f3c5ff] rounded-lg transition-colors">
              <Image src="/icons/social/facebook.svg" alt="Facebook" width={20} height={20} />
            </button>
            <button type="button" className="flex-shrink-0 p-3 bg-[#FDD3FF] hover:bg-[#f3c5ff] rounded-lg transition-colors">
              <Image src="/icons/social/apple.svg" alt="Apple" width={20} height={20} />
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Belum punya akun?{' '}
            <Link href="/auth/register" className="font-medium text-[#C500D0] hover:text-[#A200B4]">
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}