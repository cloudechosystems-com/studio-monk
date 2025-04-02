"use client";
// import { useState } from "react";
// import FileUpload from "@/components/FileUpload";

export default function UploadPage() {
  //   const [isUploading, setIsUploading] = useState(false);
  //   const [uploadProgress, setUploadProgress] = useState(0);

  //   const handleUploadComplete = (url: string) => {
  //     console.log("Upload completed:", url);
  //     setIsUploading(false);
  //     setUploadProgress(0);
  //   };

  return (
    <div className="min-h-screen p-8 text-white" style={{ backgroundColor: "black" }}>
      {/* <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Upload Video</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Upload your video files to StudioMonk
        </p>
      </header>

      <main className="max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <FileUpload
            onUploadStart={() => setIsUploading(true)}
            onUploadProgress={setUploadProgress}
            onUploadComplete={handleUploadComplete}
            acceptedFileTypes={["video/mp4", "video/quicktime"]}
            maxFileSize={100 * 1024 * 1024} // 100MB
          />

          {isUploading && (
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Uploading: {uploadProgress}%
              </p>
            </div>
          )}
        </div>
      </main> */}
    </div>
  );
}
