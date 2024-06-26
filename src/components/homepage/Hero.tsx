import { FC } from "react";

const Hero: FC = () => {
  return (
    <>
      <div className="mx-auto flex min-h-screen flex-col items-center justify-center bg-zinc-950 lg:flex-row">
        <video
          playsInline
          autoPlay
          muted
          loop
          disablePictureInPicture
          className="absolute z-0 h-full w-full object-cover lg:static lg:h-screen lg:w-full"
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        <div className="xl:pl-100 z-10 flex flex-col items-center justify-center p-6 text-center text-zinc-50 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
          <h1 className="mb-3 text-4xl font-bold md:text-5xl">Obscura</h1>
          <div className="hidden px-6 md:block">
            <p className="mb-2 text-2xl tracking-tight">
              The camera is an excuse to be someplace you otherwise don&apos;t
              belong.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
