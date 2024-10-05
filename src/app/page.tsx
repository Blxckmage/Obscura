import Navbar from "@/components/Navbar";
import Hero from "@/components/homepage/Hero";
import useSession from "@/hooks/use-session";
import { User } from "@/types/user.types";

export default async function Homepage() {
  const session: User = await useSession();
  console.log("Session: ", session);

  return (
    <main className="min-h-screen">
      <Navbar session={session} />
      <Hero />
    </main>
  );
}
