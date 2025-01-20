import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Amplify } from "aws-amplify";
import { cognitoConfig } from "@/config/cognito";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Amplify
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: cognitoConfig.userPoolId,
      userPoolClientId: cognitoConfig.userPoolWebClientId,
    },
  },
});

export const metadata: Metadata = {
  title: "StudioMonk - Stock Video Downloads",
  description: "Download high-quality stock videos for your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
