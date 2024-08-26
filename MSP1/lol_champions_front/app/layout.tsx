import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LoL Champions",
  description: "Explore League of Legends Champions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-100`}
      >
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <a href="/" className="text-2xl font-bold">
              LoL Champions
            </a>
          </div>
        </nav>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-auto">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 LoL Champions. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
