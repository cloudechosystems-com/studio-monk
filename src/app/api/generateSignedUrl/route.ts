import { NextRequest } from "next/server";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: process.env.NEXT_AWS_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_AWS_SECRET_ACCESS_KEY!,
  },
});

const BUCKET_NAME = process.env.NEXT_AWS_S3_BUCKET!;

export async function GET(req: NextRequest) {
  console.log("🟢 API Request Received:", req.method, req.url);
  console.log("🔵 Headers:", req.headers);

  const { searchParams } = new URL(req.url);
  const fileKey = searchParams.get("key");

  console.log("🟠 Extracted File Key:", fileKey);

  if (!fileKey) {
    console.error("❌ Missing file key in request");
    return new Response(JSON.stringify({ error: "Missing file key" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileKey,
    });

    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 3600,
    });

    console.log("🟢 Generated Signed URL:", signedUrl);
    return new Response(JSON.stringify({ url: signedUrl }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error generating signed URL:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate signed URL" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
