"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="flex flex-col h-full">
        <section className="h-full flex-col flex bg-white w-full text-black">

          {/* Header Section - Made Sticky */}
          <header className="bg-white px-6 sm:px-12 md:px-20 relative sticky top-0 z-50 shadow-sm">
            <div className="max-w-[1440px] mx-auto flex justify-between items-center">
              {/* Logo */}
              <Image
                src="/icons/logo.svg"
                alt="Mirach Community Logo"
                width={150}
                height={50}
                className="h-15 md:h-20 w-auto"
              />

              {/* Desktop Nav */}
              <nav className="hidden lg:flex space-x-6 font-medium">
                <Link href="/" className="hover:text-[#C500D0] transition-colors">Beranda</Link>
                <Link href="/proyek" className="hover:text-[#C500D0] transition-colors">Proyek</Link>
                <Link href="/unggahan" className="hover:text-[#C500D0] transition-colors">Unggahan</Link>
                <Link href="/acara" className="hover:text-[#C500D0] transition-colors">Acara</Link>
                <Link href="/donasi" className="hover:text-[#C500D0] transition-colors">Donasi</Link>
              </nav>

              {/* Desktop Buttons */}
              <div className="hidden lg:flex space-x-4">
                <Link href="/login">
                  <button className="bg-[#FDD3FF] hover:bg-[#A200B4] text-[#C500D0] hover:text-white font-medium py-1 px-4 rounded-lg transition-colors duration-300">
                    Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="bg-[#C500D0] hover:bg-[#8A009B] text-white font-medium py-1 px-4 rounded-lg transition-colors duration-300">
                    Sign Up
                  </button>
                </Link>
              </div>

              {/* Burger Icon */}
              <div className="block lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-[#C500D0] focus:outline-none">
                  {isOpen ? (
                    <XMarkIcon className="w-10 h-10" />
                  ) : (
                    <Bars3BottomRightIcon className="w-10 h-10" />
                  )}
                </button>
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${isOpen ? "max-h-[500px] opacity-100 transform translate-y-0" : "max-h-0 opacity-0 transform -translate-y-4"}`}
            >
              <nav className={`flex flex-col space-y-4 py-4 font-medium transition-all duration-300 ${isOpen ? "delay-75" : ""}`}>
                <Link href="/" className={`hover:text-[#C500D0] transition-all duration-300 ${isOpen ? "transform translate-x-0 opacity-100" : "transform -translate-x-4 opacity-0"} ${isOpen ? "delay-100" : ""}`} onClick={() => setIsOpen(false)}>Beranda</Link>
                <Link href="/proyek" className={`hover:text-[#C500D0] transition-all duration-300 ${isOpen ? "transform translate-x-0 opacity-100" : "transform -translate-x-4 opacity-0"} ${isOpen ? "delay-150" : ""}`} onClick={() => setIsOpen(false)}>Proyek</Link>
                <Link href="/unggahan" className={`hover:text-[#C500D0] transition-all duration-300 ${isOpen ? "transform translate-x-0 opacity-100" : "transform -translate-x-4 opacity-0"} ${isOpen ? "delay-200" : ""}`} onClick={() => setIsOpen(false)}>Unggahan</Link>
                <Link href="/acara" className={`hover:text-[#C500D0] transition-all duration-300 ${isOpen ? "transform translate-x-0 opacity-100" : "transform -translate-x-4 opacity-0"} ${isOpen ? "delay-250" : ""}`} onClick={() => setIsOpen(false)}>Acara</Link>
                <Link href="/donasi" className={`hover:text-[#C500D0] transition-all duration-300 ${isOpen ? "transform translate-x-0 opacity-100" : "transform -translate-x-4 opacity-0"} ${isOpen ? "delay-300" : ""}`} onClick={() => setIsOpen(false)}>Donasi</Link>
                <div className={`pt-2 border-t mt-2 transition-all duration-300 ${isOpen ? "transform translate-y-0 opacity-100" : "transform translate-y-4 opacity-0"} ${isOpen ? "delay-350" : ""}`}>
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-[#FDD3FF] hover:bg-[#A200B4] text-[#C500D0] hover:text-white font-medium py-2 rounded-lg transition-colors duration-300 mb-2">
                      Login
                    </button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-[#C500D0] hover:bg-[#8A009B] text-white font-medium py-2 rounded-lg transition-colors duration-300">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </nav>
            </div>

          </header>

          {/* Hero Section */}
          <section className="relative">
            {/* Hero Background - base layer */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/background/hero.svg"
                alt="Hero Background"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
              />
            </div>

            {/* Content overlay container */}
            <div className="max-w-[1440px] mx-auto relative z-10">
              <div className="pt-0 px-6 sm:px-12 md:px-20 pb-28 xl:pb-24 2xl:px-0">
                <div className="flex flex-col-reverse lg:flex-row justify-between py-12 items-center">
                  {/* Text content */}
                  <div className="w-full lg:w-3/5 self-center 2xl:px-0">
                    <h1 className="text-4xl sm:xl md:text-[64px] md:leading-[54px] text-center lg:text-left text-white font-bold leading-[34px] mb-4">
                      Mirach Community
                    </h1>

                    <p className="text-white text-lg md:text-[24px] text-center lg:text-left font-bold mb-12">
                      Pelopor komunitas pemrograman  <span style={{ color: '#FFF600' }}>Terbesar di Indonesia</span>
                    </p>

                    <p className="text-white md:text-[24px] text-center lg:text-left mb-4 font-thin leading-relaxed">
                      Wadah bagi junior programmer berbagi informasi dan <br className="hidden md:block" />merasakan pengalaman membangun projek bersama.
                    </p>

                    {/* Button alternative */}
                    <div className="flex justify-center lg:justify-start">
                      <Link href="/signup">
                        <button className="bg-[#A200B4] hover:bg-[#8A009B] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 text-sm border-1 border-white hover:border-[#FFF600] flex items-center gap-2">
                          Bergabung Sekarang
                          <ArrowRightIcon className="w-4 h-4 text-white" />
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Hero Image */}
                  <div className="w-full lg:w-2/5 flex justify-center self-center relative z-20">
                    <Image
                      src="/images/hero.png"
                      alt="Hero Image"
                      width={800}
                      height={800}
                      className="w-full max-w-xl h-auto object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Section */}
          <section>
            <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 py-16">
              {/* Heading */}
              <div className="text-center pb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 relative inline-block">
                  <span className="relative z-10">
                    Lebih dari <span className="text-[#C500D0]">Sekedar Teori</span>
                  </span>

                  {/* Highlight SVG di belakang teks */}
                  <Image
                    src="/shapes/additional.svg"
                    alt="Scratch Background"
                    width={250}
                    height={60}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0"
                  />
                </h2>
                <p className="text-gray-600 text-base md:text-lg">
                  Mendorong anggota untuk terlibat dalam proyek nyata
                </p>
              </div>

              {/* Feature Cards */}
              <div className="flex flex-col md:flex-row gap-12">
                {/* Item 1 */}
                <div className="flex-1 text-center px-2">
                  <Image
                    src="/icons/people.svg"
                    alt="Dukungan Belajar"
                    width={96}
                    height={96}
                    className="mx-auto object-contain"
                  />
                  <h3 className="text-base font-semibold mt-4">Dukungan Belajar</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Ruang aman untuk bertanya tanpa takut dihakimi, dari level pemula hingga mahir
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex-1 text-center px-2">
                  <Image
                    src="/icons/company.svg"
                    alt="Portofolio Nyata"
                    width={96}
                    height={96}
                    className="mx-auto object-contain"
                  />
                  <h3 className="text-base font-semibold mt-4">Portofolio Nyata</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Kesempatan emas untuk mengasah skill, belajar manajemen proyek dan portofolio
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex-1 text-center px-2">
                  <Image
                    src="/icons/together.svg"
                    alt="Kolaborasi"
                    width={96}
                    height={96}
                    className="mx-auto object-contain"
                  />
                  <h3 className="text-base font-semibold mt-4">Kolaborasi</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Memungkinkan anda untuk memulai, mengelola, dan bergabung dalam proyek kolaboratif
                  </p>
                </div>
              </div>

            </div>
          </section>

          <section className="flex flex-col lg:flex-row h-full bg-gray-300/50 py-16 px-6 sm:px-12 md:px-20 gap-12">
            {/* Kolom Kiri */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-center lg:text-left text-2xl md:text-4xl font-bold mb-4">
                Membuka relasi <br /><span className="text-[#C500D0]">melalui Projek dan Acara</span>
              </h3>
              <p className="text-center lg:text-left text-gray-600 text-base md:text-lg">
                Dapatkan kesempatan untuk terlibat dalam proyek tim
              </p>
            </div>

            {/* Kolom Kanan */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Kotak 1 */}
              <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-md">
                <Image
                  src="/icons/member.svg"
                  alt="Anggota"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold">45.000+</h3>
                  <p className="text-sm text-gray-600">Anggota</p>
                </div>
              </div>

              {/* Kotak 2 */}
              <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-md">
                <Image
                  src="/icons/project.svg"
                  alt="Proyek Aktif"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold">420+</h3>
                  <p className="text-sm text-gray-600">Proyek Aktif</p>
                </div>
              </div>

              {/* Kotak 3 */}
              <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-md">
                <Image
                  src="/icons/calendar.svg"
                  alt="Acara Terlaksana"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold">60+</h3>
                  <p className="text-sm text-gray-600">Acara Terlaksana</p>
                </div>
              </div>

              {/* Kotak 4 */}
              <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-md">
                <Image
                  src="/icons/click.svg"
                  alt="Unggahan Menarik"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold">5.000+</h3>
                  <p className="text-sm text-gray-600">Unggahan Menarik</p>
                </div>
              </div>
            </div>
          </section>


          <section className="relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/background/about.svg"
                alt="About Background"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
              />
            </div>

            {/* Content */}
            <section className="text-white py-16 px-6 sm:px-12 md:px-20 relative z-10">
              <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-8">
                {/* Kiri - Text */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 relative inline-block">
                    <span className="relative z-10">
                      Kenapa ada <br />
                      <span className="text-[#FFF600]">Mirach Community?</span>
                    </span>

                    {/* Highlight SVG di belakang teks */}
                    <Image
                      src="/shapes/about.svg"
                      alt="Scratch Background"
                      width={250}
                      height={60}
                      className="absolute left-0 bottom-0 -z-0"
                    />
                  </h2>

                  <p className="mb-4 text-sm md:text-base leading-relaxed">
                    &quot;Hai aku Azis, pertama aku mau bilang jangan pernah takut sama apapun. Termasuk aku hehehe bercanda… :&apos;)&quot;
                  </p>
                  <p className="mb-4 text-sm md:text-base leading-relaxed">
                    &quot;Dulu, waktu aku mulai perjalanan sebagai programmer, sering banget ngerasa sendirian. Ngabisin waktu berjam-jam di depan laptop, bingung sama teknologi yang mau dipakai, dan nggak tahu harus nanya siapa pas codingan lagi error. Hurt... capeknya!&quot;
                  </p>
                  <p className="mb-4 text-sm md:text-base leading-relaxed">
                    &quot;Mungkin kamu juga lagi ngerasain hal yang sama? Rasa takut salah, bingung milih teknologi, atau sekadar butuh teman buat berbagi semangat saat sedang berjuang. Itulah keresahan yang menjadi titik awal lahirnya sebuah ide.&quot;
                  </p>
                  <p className="mb-6 text-sm md:text-base leading-relaxed">
                    &quot;Aku ngebayangin sebuah tempat di mana para junior programmer gak perlu lagi ngerasa sendirian. Sebuah wadah di mana setiap pertanyaan dihargai, setiap kesalahan adalah pembelajaran, dan setiap anggota saling mendukung. Itulah mengapa Mirach Community dibangun.&quot;
                  </p>
                  <p className="italic text-sm">~ Nur Azis Saputra, Founder Mirach Community</p>
                </div>

                {/* Kanan - Gambar */}
                <div className="flex-1 relative">
                  <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
                    <div className="relative z-10">
                      <Image
                        src="/images/about.png"
                        alt="Founder"
                        width={700}
                        height={700}
                        className="object-contain w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section className="py-16 px-4 sm:px-8 md:px-20 max-w-[1440px]">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 relative inline-block">
              <span className="relative z-10">
                Program <span className="text-[#C500D0]">Mirach Community</span>
              </span>

              {/* Highlight SVG di belakang teks */}
              <Image
                src="/shapes/program.svg"
                alt="Scratch Background"
                width={450}
                height={100}
                className="absolute left-0 bottom-0 -z-0"
              />
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Kartu 1 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  Soon
                </div>
                <Image
                  src="/images/program-1.png"
                  alt="Proyek Kolaborasi"
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Proyek Kolaborasi</h3>
                  <Link href="/proyek" className="text-[#C500D0] font-semibold text-sm flex items-center gap-1">
                    Telusuri Program
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Kartu 2 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  Soon
                </div>
                <Image
                  src="/images/program-2.png"
                  alt="Unggahan Menarik"
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Unggahan Menarik</h3>
                  <Link href="/unggahan" className="text-[#C500D0] font-semibold text-sm flex items-center gap-1">
                    Telusuri Program
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Kartu 3 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  Soon
                </div>
                <Image
                  src="/images/program-3.png"
                  alt="Pusat Acara"
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Pusat Acara</h3>
                  <Link href="/acara" className="text-[#C500D0] font-semibold text-sm flex items-center gap-1">
                    Telusuri Program
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-[#1F2B32] text-white py-10 px-4 sm:px-8 md:px-20">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

              {/* Kiri - Logo dan Hak Cipta */}
              <div>
                <Image
                  src="/icons/logo.svg"
                  alt="Mirach Logo"
                  width={120}
                  height={40}
                  className="mb-4"
                />
                <p className="text-sm text-gray-300">Copyright © 2025 Mirach Community.</p>
                <p className="text-sm text-gray-300">All rights reserved</p>
              </div>

              {/* Tengah - Sosial Media */}
              <div className="flex items-center gap-4">
                <Link href="#" aria-label="Instagram" className="hover:text-[#C500D0]">
                  <i className="fab fa-instagram text-xl"></i>
                </Link>
                <Link href="#" aria-label="Dribbble" className="hover:text-[#C500D0]">
                  <i className="fab fa-dribbble text-xl"></i>
                </Link>
                <Link href="#" aria-label="Twitter" className="hover:text-[#C500D0]">
                  <i className="fab fa-twitter text-xl"></i>
                </Link>
                <Link href="#" aria-label="YouTube" className="hover:text-[#C500D0]">
                  <i className="fab fa-youtube text-xl"></i>
                </Link>
              </div>

              {/* Kanan - Navigasi */}
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Halaman</h4>
                  <ul className="space-y-1">
                    <li><Link href="/" className="text-gray-300 hover:underline">Beranda</Link></li>
                    <li><Link href="/proyek" className="text-gray-300 hover:underline">Proyek</Link></li>
                    <li><Link href="/unggahan" className="text-gray-300 hover:underline">Unggahan</Link></li>
                    <li><Link href="/acara" className="text-gray-300 hover:underline">Acara</Link></li>
                    <li><Link href="/donasi" className="text-gray-300 hover:underline">Donasi</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dukungan</h4>
                  <ul className="space-y-1">
                    <li><Link href="/bantuan" className="text-gray-300 hover:underline">Pusat bantuan</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </section>
    </>
  );
}