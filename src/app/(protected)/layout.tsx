import useSession from "@/hooks/use-session";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Obscura | Gallery",
};

export default async function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const auth = await useSession();

  if (!auth) {
    redirect("/auth/login");
  }

  return <main>{children}</main>;
}

// import type { Metadata } from "next";
// import "@/styles/globals.css";
// import { cn } from "@/lib/utils";
// import { Inter } from "next/font/google";
// import { Toaster } from "@/components/ui/toaster";
//
// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });
//
// export const metadata: Metadata = {
//   title: "Obscura",
//   description: "A gallery website",
// };
//
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={cn("dark", inter.className)}>
//       <body>
//         <main>{children}</main>
//         <Toaster />
//       </body>
//     </html>
//   );
// }
