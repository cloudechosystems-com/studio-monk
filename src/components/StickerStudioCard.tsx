import React from "react";

const StickerStudioCard = () => (
  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-90 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-lg overflow-hidden transition duration-500 p-6 text-center will-change-transform hover:border-purple-400">
    <img
      src="/images/stickerstudio.png" // Place a suitable sticker icon in /public/images/
      alt="StickerStudio"
      className="w-full h-56 object-cover rounded-xl shadow-md mb-4"
    />
    <h2 className="text-2xl font-extrabold text-gray-100 mb-3 relative inline-block">
      StickerStudio
    </h2>
    <p className="text-gray-300 text-base mb-6">
      Create, edit, and download fun stickers. Turn your images into custom stickers in seconds with powerful online tools!
    </p>
    <a
      href="https://sticker.stockmediahub.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all"
    >
      Try StickerStudio
    </a>
  </div>
);

export default StickerStudioCard;
