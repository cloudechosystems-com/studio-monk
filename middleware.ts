import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import jwkToPem from "jwk-to-pem";

const COGNITO_REGION = process.env.NEXT_AWS_REGION!;
const COGNITO_POOL_ID = process.env.COGNITO_POOL_ID!;
const COGNITO_CLIENT_ID = process.env.COGNITO_CLIENT_ID!;

export async function middleware(req: NextRequest) {
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Fetch Cognito public JWK keys
    const jwks = await fetch(
      `https://cognito-idp.${COGNITO_REGION}.amazonaws.com/${COGNITO_POOL_ID}/.well-known/jwks.json`
    ).then((res) => res.json());

    // Decode JWT header
    const decodedHeader = jwt.decode(token, { complete: true });
    if (!decodedHeader || !decodedHeader.header.kid) {
      throw new Error("Invalid token");
    }

    // Find matching key
    const key = jwks.keys.find((k: any) => k.kid === decodedHeader.header.kid);
    if (!key) {
      throw new Error("Invalid token signature");
    }

    // Convert JWK to PEM format
    const pem = jwkToPem(key);

    // Verify JWT
    jwt.verify(token, pem, {
      algorithms: ["RS256"],
      audience: COGNITO_CLIENT_ID,
    });

    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

// Apply middleware to secure API routes
export const config = {
  matcher: "/api/:path*",
};
