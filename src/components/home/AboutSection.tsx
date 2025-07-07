import Image from "next/image";

export default function AboutSection() {
  return (
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
  )
};
