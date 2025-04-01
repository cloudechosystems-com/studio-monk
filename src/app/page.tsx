import LogoutForm from "@/ui/auth/logout-form";
import Image from "next/image";

export default function Home() {
  return (
        <div className="flex flex-col justify-center items-center min-h-screen text-center px-6 sm:px-16 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100 animate-gradient">
          <div className="max-w-3xl animate-fadeIn flex flex-col items-center justify-center min-h-[80vh] space-y-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Stock Image & Video Download
            </h1>
            <p className="text-xl sm:text-2xl text-gray-800 font-semibold">
              Coming Soon...
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center">
              We are working hard to bring you the best stock images and videos for your creative projects.
              Stay tuned for our launch!
            </p>
          </div>
          <div className="pb-6 text-gray-600 text-sm">
            <p className="transition-opacity duration-500 hover:opacity-80">
              Powered by
              <a href="https://shricom.com" className="text-blue-600 font-semibold hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                shricom.com
              </a>
            </p>
          </div>
        </div>
      );
    }