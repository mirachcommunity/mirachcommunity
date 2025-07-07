import Image from "next/image";

export default function FeaturesSection() {
  return (
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
  )
};
