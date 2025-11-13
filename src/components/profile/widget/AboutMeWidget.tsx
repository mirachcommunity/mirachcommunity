import { User, Cake, MapPin, Mail, Phone } from 'lucide-react';

// Data ini nanti bisa Anda dapatkan dari API/props
const aboutData = {
  gender: 'Laki-Laki',
  birthday: '1 Januari 2000',
  location: 'Depok, Jawa Barat',
  email: 'nurazissaputra@gmail.com',
  phone: '-',
};

// Objek untuk memetakan data ke ikon
const iconMap = {
  gender: <User size={18} className="text-gray-500" />,
  birthday: <Cake size={18} className="text-gray-500" />,
  location: <MapPin size={18} className="text-gray-500" />,
  email: <Mail size={18} className="text-gray-500" />,
  phone: <Phone size={18} className="text-gray-500" />,
};

export default function AboutMeWidget() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="font-bold text-lg mb-4">Tentang Saya</h3>
      
      {/* Kita gunakan space-y-3 pada kontainer 
        dan border-gray-100 sebagai pemisah
      */}
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
          <span className="text-sm text-gray-700">{aboutData.email}</span>
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