import Image from "next/image";
import Link from "next/link";

export default function ProgramSection() {
  return (
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
  )
};
