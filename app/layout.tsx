import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Aurelia - Premium Furniture & Lifestyle",
  description:
    "Discover exceptional furniture and lifestyle products that transform your space into a sanctuary of style and comfort.",
  keywords:
    "furniture, lifestyle, home decor, interior design, premium furniture, modern furniture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="font-sans"
        style={{ fontFamily: "'Julius Sans One', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
