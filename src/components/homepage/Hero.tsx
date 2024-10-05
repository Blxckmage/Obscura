import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import Particles from "@/components/ui/particles";
import WordRotate from "@/components/ui/word-rotate";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function Hero() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden py-20 text-center">
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={"#FFF"}
        refresh
      />
      <Link href="/discovery">
        <div className="z-10 my-4 flex items-center justify-center">
          <AnimatedGradientText>
            🔭
            <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
              )}
            >
              Introducing Obscura Discovery
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </div>
      </Link>

      <h1 className="mb-6 max-w-screen-md text-5xl font-bold sm:text-6xl md:text-7xl lg:max-w-screen-lg lg:text-8xl">
        Obscura is your
        <WordRotate
          className="text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl"
          words={["visual storyteller", "creative companion", "digital canvas"]}
        />
      </h1>
      <p className="max-w-screen-sm text-lg text-neutral-400 md:max-w-screen-lg">
        Elevate your visual storytelling that enables you to design captivating
        visuals with ease.
      </p>
    </section>
  );
}
