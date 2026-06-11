import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sushanth Gorla | Portfolio",
  description: "Portfolio of Sushanth Gorla, a Computer Science Engineering student seeking software engineering internships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-[#fdfdfc] text-[#09090b] antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}

