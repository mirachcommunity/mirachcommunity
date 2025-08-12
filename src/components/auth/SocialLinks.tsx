import Image from "next/image";
import { redirectToGoogleAuth } from '@/services/auth';

interface SocialLinksProps {
  text?: string;
}

export default function SocialLinks({text = "atau lanjutkan dengan"}: SocialLinksProps) {
  return (
    <>
      <div className="flex items-center my-6">
        <hr className="flex-grow border-t border-gray-200" />
        <span className="mx-4 text-sm font-medium text-gray-400">
          {text}
        </span>
        <hr className="flex-grow border-t border-gray-200" />
      </div>

    <div className="flex items-center justify-center space-x-4">
      <button
        type="button"
        onClick={redirectToGoogleAuth}
        className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg cursor-pointer transition-all"
      >
        <Image src="/icons/social/google.svg" alt="Google" width={24} height={24} />
      </button>
      <button
        type="button"
        className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg cursor-pointer transition-all"
      >
        <Image src="/icons/social/facebook.svg" alt="Facebook" width={24} height={24} />
      </button>
      <button
        type="button"
        className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg cursor-pointer transition-all"
      >
        <Image src="/icons/social/apple.svg" alt="Apple" width={24} height={24} />
      </button>
    </div>
    </>
  )
};
