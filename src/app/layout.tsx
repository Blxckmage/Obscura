import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import TanstackProvider from "@/providers/TanstackProvider";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Obscura",
  description: "A gallery website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en" className={cn("dark", inter.className)}>
      <body>
        <TanstackProvider>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <main>{children}</main>
            <Toaster />
          </HydrationBoundary>
        </TanstackProvider>
      </body>
    </html>
  );
}
