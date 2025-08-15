import Image from "next/image";
import { Button } from "../ui/Button";

interface ProfileHeaderProps {
  slug: string;
}

export default function ProfileHeader({ slug }: ProfileHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-4">
      <div className="relative">
        <div className="h-48 bg-gray-200 rounded-t-lg relative">
          <Image
            src="/images/program-1.png"
            alt="Banner Profil"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        <div className="absolute -bottom-16 left-6">
          <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-300 relative overflow-hidden">
            <Image
              src="/images/about.png"
              alt="Foto Profil"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end p-4 pt-6">
        <div className="flex gap-2 items-center">
          <Button variant="primary" size="sm">Ikuti</Button>
          <Button variant="outline" size="sm">Kirim pesan</Button>
        </div>
      </div>

      <div className="px-6 pb-6">
        <h1 className="text-2xl font-bold">{slug}</h1>
        <p className="text-gray-600 pb-2">Software Engineer at Mirach Community</p>
        <p className="text-sm text-gray-400">Depok, Jawa Barat, Indonesia</p>
      </div>
    </div>
  );
};