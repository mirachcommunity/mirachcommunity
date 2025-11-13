import Image from 'next/image';

// Data tiruan untuk user aktif
const activeUsers = [
  {
    id: 1,
    name: 'Shelby Goode',
    avatar: '/images/users/profile/default.png', // Ganti dengan path Anda
    status: 'Online',
    time: '1 min ago',
  },
  {
    id: 2,
    name: 'Robert Bacins',
    avatar: '/images/users/profile/default.png', // Ganti dengan path Anda
    status: 'Busy',
    time: '9 min ago',
  },
  {
    id: 3,
    name: 'John Carilo',
    avatar: '/images/users/profile/default.png', // Ganti dengan path Anda
    status: 'Online',
    time: '15 min ago',
  },
  {
    id: 4,
    name: 'Adriene Watson',
    avatar: '/images/users/profile/default.png', // Ganti dengan path Anda
    status: 'Online',
    time: '21 min ago',
  },
];

export default function ActiveUsersWidget() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="font-bold text-lg text-indigo-700 mb-4">Aktif</h3>
      <div className="space-y-4">
        {activeUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="rounded-full bg-gray-200"
                />
                {user.status === 'Online' && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </div>
              <div>
                <div className="font-semibold text-sm text-indigo-700">{user.name}</div>
                <div className="text-xs text-gray-500">{user.status}</div>
              </div>
            </div>
            <span className="text-xs text-gray-400">{user.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}