import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import NavBar from '@/components/layout/NavBar';


// ✅ Imports
import HydrationCheck from '@/components/HydrationCheck';
import Header from '@/components/layout/Header'; // <-- Add this line

// ✅ Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata
export const metadata: Metadata = {
  title: "Georgian Floors | Mobile Carpet Showroom",
  description: "We bring carpet samples and expert advice directly to your home or business.",
};

// ✅ Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="darkreader-lock" />
      </head>
      <body className="min-h-screen bg-neutral-50 light-theme">
        <HydrationCheck />
        <NavBar />

        {/* 🔥 Add the persistent site-wide header */}
        <Header />

        {children}
      </body>
    </html>
  );
}
