import { NextRequest, NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET!;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const continuationToken = searchParams.get("continuationToken");
    const category = searchParams.get("category");

    let prefix = "";
    if (category === "images") {
      prefix = "images/";
    } else if (category === "videos") {
      prefix = "videos/";
    }

    console.log("🟢 Fetching files from S3 in folder:", prefix);
    console.log("🔵 Received ContinuationToken:", continuationToken);

    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: prefix, // ✅ Filter objects by folder
      ContinuationToken: continuationToken
        ? decodeURIComponent(continuationToken)
        : undefined,
      MaxKeys: 5, // Adjust for pagination
    });

    const response = await s3Client.send(command);

    console.log("✅ S3 Response:", response);

    return NextResponse.json({
      files: response.Contents || [],
      nextContinuationToken: response.NextContinuationToken
        ? encodeURIComponent(response.NextContinuationToken)
        : null,
    });
  } catch (error: any) {
    console.error("❌ Error fetching S3 objects:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch files", details: error.message },
      { status: 500 }
    );
  }
}
