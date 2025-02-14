import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageCardProps {
  title: string;
  fileKey: string;
}

export default function ImageCard({ title, fileKey }: ImageCardProps) {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchSignedUrl = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming you store the Cognito token in localStorage

        const res = await fetch(
          `/api/generateSignedUrl?key=${encodeURIComponent(fileKey)}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch signed URL: ${res.statusText}`);
        }

        const data = await res.json();
        if (data.url) {
          setThumbnailUrl(data.url);
        } else {
          console.error("Failed to fetch signed URL");
        }
      } catch (error) {
        console.error("Error fetching signed URL:", error);
      }
    };

    fetchSignedUrl();
  }, [fileKey]);

  const handleDownload = async (fileName: string) => {
    try {
      const res = await fetch(
        `/api/download?file=${encodeURIComponent(fileName)}`
      );
      const data = await res.json();

      console.log("🔵 Download data:", data);

      if (data.url) {
        const response = await fetch(data.url);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.setAttribute(
          "download",
          fileName.split("/").pop() || "download.jpg"
        );
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(blobUrl);
      } else {
        alert("Failed to generate download link");
      }
    } catch (error) {
      console.error("❌ Download error:", error);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg group relative">
      <div className="relative aspect-video">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            unoptimized={true}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            Loading...
          </div>
        )}

        <button
          className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => handleDownload(fileKey)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        {/* <p className="text-sm text-gray-600 dark:text-gray-400">By {author}</p> */}
      </div>
    </div>
  );
}
