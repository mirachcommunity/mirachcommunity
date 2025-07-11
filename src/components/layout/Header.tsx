"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/proyek", label: "Proyek" },
    { href: "/unggahan", label: "Unggahan" },
    { href: "/acara", label: "Acara" },
    { href: "/donasi", label: "Donasi" },
  ];

  return (
    <header className="bg-white px-6 sm:px-12 md:px-20 relative sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/icons/logo.svg"
          alt="Mirach Community Logo"
          width={150}
          height={50}
          className="h-12 md:h-16 w-auto"
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#C500D0] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-4">
          <Link href="/auth/login">
            <button className="bg-[#FDD3FF] hover:bg-[#A200B4] text-[#C500D0] hover:text-white font-medium py-1 px-4 rounded-lg transition-colors duration-300">
              Masuk
            </button>
          </Link>
          <Link href="/auth/register">
            <button className="bg-[#C500D0] hover:bg-[#8A009B] text-white font-medium py-1 px-4 rounded-lg transition-colors duration-300">
              Daftar
            </button>
          </Link>
        </div>

        {/* Burger Icon */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-20 p-1 rounded-lg bg-gray-100 text-[#C500D0] transition-all duration-200 ease-in-out hover:bg-gray-200 active:scale-95 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#C500D0]"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3BottomRightIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${isOpen ? "max-h-[500px] opacity-100 transform translate-y-0" : "max-h-0 opacity-0 transform -translate-y-4"}`}
      >
        <nav className={`flex flex-col space-y-4 py-4 font-medium transition-all duration-300 ${isOpen ? "delay-75" : ""}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#C500D0] transition-colors" onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className={`pt-2 border-t mt-2 transition-all duration-300 ${isOpen ? "transform translate-y-0 opacity-100" : "transform translate-y-4 opacity-0"} ${isOpen ? "delay-350" : ""}`}>
            <Link href="/auth/login" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#FDD3FF] hover:bg-[#A200B4] text-[#C500D0] hover:text-white font-medium py-2 rounded-lg transition-colors duration-300 mb-2">
                Masuk
              </button>
            </Link>
            <Link href="/auth/register" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#C500D0] hover:bg-[#8A009B] text-white font-medium py-2 rounded-lg transition-colors duration-300">
                Daftar
              </button>
            </Link>
          </div>
        </nav>
      </div>

    </header>
  )
};
