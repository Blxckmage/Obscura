import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Obscura",
  description: "Image sharing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-full w-full flex-col lg:flex-row">
          <Navbar />
          <Sidebar />
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
