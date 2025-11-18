import { UserProfile } from '@/services/profile';
import { User, Cake, MapPin, Mail, Phone } from 'lucide-react';

interface AboutMeWidgetProps {
  user: UserProfile;
}

export default function AboutMeWidget({ user }: AboutMeWidgetProps) {
  
  const birthday = user.profile.dateOfBirth 
    ? new Date(user.profile.dateOfBirth).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    : '-';

  const aboutData = {
    gender: '-', // API endpoint saat ini belum menyediakan gender
    birthday: birthday,
    location: 'Indonesia', // API endpoint saat ini belum menyediakan lokasi
    email: user.email,
    phone: '-', // API endpoint saat ini belum menyediakan phone
  };

  const iconMap = {
    gender: <User size={18} className="text-gray-500" />,
    birthday: <Cake size={18} className="text-gray-500" />,
    location: <MapPin size={18} className="text-gray-500" />,
    email: <Mail size={18} className="text-gray-500" />,
    phone: <Phone size={18} className="text-gray-500" />,
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="font-bold text-lg mb-4">Tentang Saya</h3>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 pt-1">
          {iconMap.gender}
          <span className="text-sm text-gray-700">{aboutData.gender}</span>
        </div>
        <hr className="border-gray-100" />

        <div className="flex items-center gap-3">
          {iconMap.birthday}
          <span className="text-sm text-gray-700">{aboutData.birthday}</span>
        </div>
        <hr className="border-gray-100" />

        <div className="flex items-center gap-3">
          {iconMap.location}
          <span className="text-sm text-gray-700">{aboutData.location}</span>
        </div>
        <hr className="border-gray-100" />

        <div className="flex items-center gap-3">
          {iconMap.email}
          <span className="text-sm text-gray-700 break-all">{aboutData.email}</span>
        </div>
        <hr className="border-gray-100" />

        <div className="flex items-center gap-3">
          {iconMap.phone}
          <span className="text-sm text-gray-700">{aboutData.phone}</span>
        </div>
      </div>
    </div>
  );
}