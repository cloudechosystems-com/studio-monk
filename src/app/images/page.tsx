"use client";
import { useEffect, useState } from "react";
import ImageCard from "@/components/ImageCard";

interface File {
  Key: string;
  LastModified: string;
  ETag: string;
  ChecksumAlgorithm: string[];
  ChecksumType: string;
  Size: number;
  StorageClass: string;
}

export default function Images() {
  const [searchQuery, setSearchQuery] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [continuationToken, setContinuationToken] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const fetchFiles = async (token: string | null = null) => {
    setLoading(true);
    try {
      console.log("🔵 Fetching images with continuationToken:", token);

      const res = await fetch(
        `/api/files?category=images${token ? `&continuationToken=${encodeURIComponent(token)}` : ""}`
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch images: ${res.statusText}`);
      }

      const data = await res.json();
      console.log("✅ API Response (Images):", data);

      setFiles((prevFiles) => [...prevFiles, ...data.files]);
      setContinuationToken(data.nextContinuationToken); // 🔥 Ensure correct token is stored
    } catch (err) {
      console.error("❌ Error fetching images:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

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

      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {files.map((file) => (
          <ImageCard key={file.Key} title={`${file.Key}`} fileKey={file.Key} />
        ))}
      </main>

      {continuationToken && (
        <div className="flex justify-center mt-8">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => {
              console.log("📌 Clicking Load More - Token:", continuationToken);
              if (continuationToken) {
                fetchFiles(continuationToken);
              }
            }}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
