import Image from 'next/image';

// Data tiruan untuk sugesti
const suggestions = [
  {
    id: 1,
    name: 'Eddie Lobanovskiy',
    avatar: '/images/users/profile/default.png', // Ganti dengan path Anda
    email: 'laboanovskiy@gmail.com',
  },
  {
    id: 2,
    name: 'Alexey Stave',
    avatar: '/images/users/profile/default.png', // Ganti dengan path Anda
    email: 'alexeyst@gmail.com',
  },
  {
    id: 3,
    name: 'Anton Tkacheve',
    avatar: '/images/users/profile/default.png', // Ganti dengan path Anda
    email: 'tkacheveanton@gmail.com',
  },
];

export default function SuggestionsWidget() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="font-bold text-lg text-indigo-700 mb-4">Mungkin kenal</h3>
      <div className="space-y-4">
        {suggestions.map((user) => (
          <div key={user.id} className="flex items-center gap-3">
            <Image
              src={user.avatar}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full bg-gray-200"
            />
            <div>
              <div className="font-semibold text-sm text-indigo-700">{user.name}</div>
              <div className="text-xs text-gray-500">{user.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}