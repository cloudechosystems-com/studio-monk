import { useEffect, useState } from "react";

interface VideoCardProps {
  title: string;
  fileKey: string;
}

export default function VideoCard({ title, fileKey }: VideoCardProps) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchSignedUrl = async () => {
      try {
        const res = await fetch(
          `/api/generateSignedUrl?key=${encodeURIComponent(fileKey)}`
        );
        if (!res.ok)
          throw new Error(`Failed to fetch signed URL: ${res.statusText}`);

        const data = await res.json();
        if (data.url) setVideoUrl(data.url);
      } catch (error) {
        console.error("Error fetching signed URL:", error);
      }
    };

    fetchSignedUrl();
  }, [fileKey]);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full h-48">
        {videoUrl ? (
          <video controls className="w-full h-full object-cover">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            Loading...
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
      </div>
    </div>
  );
}
