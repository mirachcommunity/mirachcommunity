import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileFeed from "@/components/profile/ProfileFeed";
import ActiveUsersWidget from "@/components/profile/widget/ActiveUsersWidget";
import SuggestionsWidget from "@/components/profile/widget/SuggestionsWidget";
import AboutMeWidget from "@/components/profile/widget/AboutMeWidget";
import BadgeWidget from "@/components/profile/widget/BadgeWidget";
import CertificateWidget from "@/components/profile/widget/CertificateWidget";
import { Button } from "@/components/ui/Button";
import { getProfileByUsername } from "@/services/profile";
import notFound from "@/app/not-found";

const mockFeedData = [
  {
    id: 1,
    username: "Nur Azis Saputra",
    avatarUrl: "/images/users/profile/default.png",
    timestamp: "15 menit yang lalu",
    imageUrl: "/images/users/banner/default.jpg",
    caption: "Dua AI ini sering banget di pake. tapi kalo urusan coding claude nomor 1 sih men...",
    likes: 1498,
    comments: 3000,
  },
  {
    id: 2,
    username: "Nur Azis Saputra",
    avatarUrl: "/images/users/profile/default.png",
    timestamp: "1 jam yang lalu",
    imageUrl: "/images/users/banner/default.jpg",
    caption: "Belajar .NET Core 8 dan Entity Framework hari ini. Seru banget!",
    likes: 852,
    comments: 45,
  },
];


export default async function Profile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const user = await getProfileByUsername(slug);

  if (!user) {
    return notFound();
  }

  return (
    <div className="flex gap-4 bg-gray-100 min-h-screen py-8 px-6 sm:px-12 md:px-20">
      <main className="flex-3">
        <ProfileHeader user={user} />
        
        <div className="flex gap-4">
          <aside className="flex-1 space-y-4 h-fit">
            <AboutMeWidget user={user} />
            <BadgeWidget />
            <CertificateWidget />
            <Button variant="primary" size="md">Donasi Rp.1.230.000,-</Button>
          </aside>
          
          <div className="flex-3 bg-white rounded-lg shadow-sm">
            
            {/* --- 3. Navigasi Tab (Styling diperbaiki) --- */}
            <nav className="flex border-b border-gray-200">
              <a 
                href="#" 
                className="flex-1 text-center py-3 px-2 font-semibold text-gray-500 hover:bg-gray-50"
              >
                Pengikut
              </a>
              <a 
                href="#" 
                className="flex-1 text-center py-3 px-2 font-semibold text-gray-500 hover:bg-gray-50"
              >
                Mengikuti
              </a>
              <a 
                href="#" 
                className="flex-1 text-center py-3 px-2 font-semibold text-black border-b-2 border-black"
              >
                Unggahan
              </a>
            </nav>

            <div>
              {mockFeedData.map((post) => (
                <ProfileFeed
                  key={post.id}
                  username={post.username}
                  avatarUrl={post.avatarUrl}
                  timestamp={post.timestamp}
                  imageUrl={post.imageUrl}
                  caption={post.caption}
                  likes={post.likes}
                  comments={post.comments}
                />
              ))}
            </div>

          </div>
        </div>
      </main>
      {/* Kita ganti <div> lama dengan <aside> yang berisi 2 widget */}
      <aside className="flex-1 space-y-4 sticky top-20 self-start">
        <ActiveUsersWidget />
        <SuggestionsWidget />
      </aside>
    </div>
  );
}