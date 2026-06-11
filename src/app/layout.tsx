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
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="font-sans bg-neutral-950 text-neutral-50 antialiased overflow-x-hidden min-h-screen">
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-neutral-950 to-neutral-950"></div>
        {children}
      </body>
    </html>
  );
}
