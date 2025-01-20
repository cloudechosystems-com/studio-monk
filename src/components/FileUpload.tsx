"use client";
import { useState } from "react";

export default function FileUpload() {
  const [dragging, setDragging] = useState(false);

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    try {
      // Get presigned URL
      const response = await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type,
        }),
      });
      const { presignedUrl } = await response.json();

      // Upload to S3
      await fetch(presignedUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });

      alert("Upload complete!");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      style={{
        border: "2px dashed #ccc",
        padding: "20px",
        textAlign: "center",
        background: dragging ? "#e1e1e1" : "white",
      }}
    >
      Drop file here to upload to S3
    </div>
  );
}
