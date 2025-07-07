import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
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
  )
};
