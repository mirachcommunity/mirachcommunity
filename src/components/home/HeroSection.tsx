import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
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
  )
};
