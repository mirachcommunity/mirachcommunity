import Image from "next/image";

export default function StatsSection() {
  return (
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
  )
};
