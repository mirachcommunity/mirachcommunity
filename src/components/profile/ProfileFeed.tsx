import Image from 'next/image';
import { MoreHorizontal, Heart, MessageSquare } from 'lucide-react';

// Tentukan tipe data untuk props
type FeedPostProps = {
  username: string;
  avatarUrl: string;
  timestamp: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
};

export default function ProfileFeed({
  username,
  avatarUrl,
  timestamp,
  imageUrl,
  caption,
  likes,
  comments,
}: FeedPostProps) {
  return (
    // Kontainer utama untuk satu post, dengan garis pemisah di bawah
    <div className="border-b border-gray-200 py-4 last:border-b-0">
      
      {/* 1. Header Post: Avatar, Username, Timestamp, Tombol More */}
      <div className="flex items-center justify-between px-4 mb-3">
        <div className="flex items-center gap-3">
          <Image
            src={avatarUrl}
            alt={`${username} avatar`}
            width={32}
            height={32}
            className="rounded-full bg-gray-200" // Tambahkan bg-gray-200
          />
          <div>
            <span className="font-semibold text-sm">{username}</span>
            <span className="text-gray-500 text-xs ml-2">{timestamp}</span>
          </div>
        </div>
        <button className="text-gray-600 hover:text-black">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* 2. Gambar Postingan */}
      <div className="relative w-full aspect-[4/5] bg-gray-100"> 
        {/* Menggunakan aspect-[4/5] atau aspect-square sesuai kebutuhan */}
        <Image
          src={imageUrl}
          alt="Post content"
          layout="fill"
          objectFit="cover" // 'cover' akan mengisi area tanpa distorsi
        />
      </div>

      {/* 3. Aksi, Like, Caption, dan Komentar */}
      <div className="px-4 pt-3">
        {/* Tombol Aksi */}
        <div className="flex gap-4 mb-2">
          <button className="hover:text-red-500">
            <Heart size={24} />
          </button>
          <button className="hover:text-blue-500">
            <MessageSquare size={24} />
          </button>
          {/* Anda bisa tambahkan ikon share/bookmark di sini */}
        </div>

        {/* Jumlah Likes */}
        <div className="font-semibold text-sm mb-1">
          {likes.toLocaleString('id-ID')} suka
        </div>

        {/* Caption */}
        <div className="text-sm">
          <span className="font-semibold cursor-pointer">{username}</span>
          <span className="ml-1">
            {caption}
          </span>
          {/* Tampilkan tombol "tampilkan lebih banyak" jika perlu */}
          {caption.length > 100 && ( // Contoh kondisi
            <button className="text-gray-500 ml-1 text-xs">
              tampilkan lebih banyak
            </button>
          )}
        </div>

        {/* Jumlah Komentar */}
        <div className="text-gray-500 text-sm mt-1 cursor-pointer hover:text-gray-800">
          Lihat semua {comments.toLocaleString('id-ID')} komentar
        </div>
      </div>
    </div>
  );
}