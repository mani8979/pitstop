import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "PITSTOP - Premium Automotive Service in Sohar",
  description: "Your Trusted Automotive Service Partner in Sohar. Expert Repairs, Diagnostics & Maintenance for All Vehicle Brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-[#0A0A0A] text-[#F5F5F5]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        {/* Footer will go here */}
      </body>
    </html>
  );
}
