export default function Home() {
  return (
    <div className="min-h-screen p-8 text-white bg-black flex flex-col items-center justify-center">
      {/* Common Heading */}
      <h1 className="text-5xl font-extrabold text-gray-100 mb-16 text-center">
        Explore Free Stock Media
      </h1>
      
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Image Card */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-90 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-lg overflow-hidden transition duration-500 p-6 text-center will-change-transform hover:border-purple-400">
          <img
            src="/images/homeimage.png"
            alt="Stock Image"
            className="w-full h-56 object-cover rounded-xl shadow-md mb-4"
          />
          <h2 className="text-2xl font-extrabold text-gray-100 mb-3 relative inline-block">
            Stock Image
          </h2>
          <p className="text-gray-300 text-base mb-6">Explore free high-quality images for your projects. Find breathtaking visuals for any creative work. Enhance your content with stunning photography.</p>
          <a
            href="/images"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all"
          >
            Browse Images
          </a>
        </div>

        {/* Video Card */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-90 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-lg overflow-hidden transition duration-500 p-6 text-center will-change-transform hover:border-purple-400">
          <video
            src="/images/video.mp4"
            controls
            className="w-full h-56 object-cover rounded-xl shadow-md mb-4"
          ></video>
          <h2 className="text-2xl font-extrabold text-gray-100 mb-3 relative inline-block">
            Stock Video
          </h2>
          <p className="text-gray-300 text-base mb-6">Discover stunning stock videos for all your needs. Elevate your projects with high-quality clips. Access a diverse range of visuals for any occasion.</p>
          <a
            href="/videos"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all"
          >
            Browse Videos
          </a>
        </div>
      </div>

      <div className="pt-20 pb-6 text-gray-600 text-sm flex justify-center">
        <div className="transition-opacity duration-500 hover:opacity-80">
          Powered by
          <a href="https://shricom.com" className="text-blue-600 font-semibold hover:underline ml-1" target="_blank" rel="noopener noreferrer">
            shricom.com
          </a>
        </div>
      </div>
    </div>
  );
}
