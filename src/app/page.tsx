import Hero from "@/components/homepage/Hero";
import Community from "@/components/homepage/Community";
import Navbar from "@/components/Navbar";

export default function Homepage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Community />
    </main>
  );
}
