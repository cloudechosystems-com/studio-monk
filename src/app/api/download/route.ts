import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextRequest, NextResponse } from "next/server";

const s3 = new S3Client({
    region: process.env.NEXT_AWS_REGION || "eu-west-2",  // Ensure it picks up the env variable
    credentials: {
      accessKeyId: process.env.NEXT_AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.NEXT_AWS_SECRET_ACCESS_KEY!,
    },
  });
  

export async function GET(req: NextRequest) {
  console.log("📥 API Request Received:", req.method, req.url);

  try {
    const { searchParams } = new URL(req.url);
    const fileKey = decodeURIComponent(searchParams.get("file") || "");

    if (!fileKey) {
      console.error("❌ Missing file key in request");
      return NextResponse.json({ error: "Missing file parameter" }, { status: 400 });
    }

    console.log("🔎 Fetching File from S3:", fileKey);

    // Generate a signed URL for secure download
    const command = new GetObjectCommand({
        Bucket: process.env.NEXT_AWS_S3_BUCKET,
        Key: fileKey,
    });

    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 60 }); // URL valid for 60 sec

    console.log("✅ Signed URL Generated:", signedUrl);

    return NextResponse.json({ url: signedUrl });
  }catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ S3 Error:", error.message);
      return NextResponse.json(
        { error: "Failed to generate URL", details: error.message },
        { status: 500 }
      );
    } else {
      console.error("❌ Unknown Error:", error);
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
  
}
