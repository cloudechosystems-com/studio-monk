import Image from "next/image";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  author: string;
}

export default function VideoCard({
  id,
  title,
  thumbnailUrl,
  duration,
  author,
}: VideoCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg group relative">
      <div className="relative aspect-video">
        <Image
          src={thumbnailUrl}
          alt={title}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
          {duration}
        </span>
        <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
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
        <p className="text-sm text-gray-600 dark:text-gray-400">By {author}</p>
      </div>
    </div>
  );
}
