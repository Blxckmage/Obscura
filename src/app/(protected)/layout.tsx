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
