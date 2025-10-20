import Image from "next/image";

export default function MemeGeneratorCard() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg group relative">
      <div className="relative aspect-video">
        <Image
          src="/memegenerator.png" // Add this image to your public/ folder
          alt="Meme Generator"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          unoptimized={true}
        />
        <a
          href="https://pic-a-meme-55192612612063.us-central1.run.app"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
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
              d="M9 17v-6h6v6h4v2H5v-2h4z" // (can use any icon you like)
            />
          </svg>
          <span className="sr-only">Go to Meme Generator</span>
        </a>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">Meme Generator</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Create custom memes using top templates. Boost your creativity and have fun!
        </p>
      </div>
    </div>
  );
}
