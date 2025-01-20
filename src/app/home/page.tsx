"use client";
import { useState } from "react";
import VideoCard from "@/components/VideoCard";
import thumbnailImage from "../../../public/images/blue_tinted_image.png";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Studio</h1>
        <div className="max-w-2xl">
          <input
            type="search"
            placeholder="Search for stock videos..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <VideoCard
            key={id}
            id={id}
            title={`Sample Video ${id}`}
            thumbnailUrl={thumbnailImage}
            duration="0:30"
            author="Studio Monk"
          />
        ))}
      </main>
    </div>
  );
}
