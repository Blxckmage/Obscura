import SignupForm from "@/components/auth/SignupForm";
import FlickeringGrid from "@/components/ui/flickering-grid";

const SignupPage = () => {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden">
      <FlickeringGrid
        className="absolute inset-0 z-0 h-full w-full"
        squareSize={4}
        gridGap={6}
        color="#737373"
        maxOpacity={0.3}
        flickerChance={0.1}
      />
      <div className="relative z-10 hidden w-1/2 flex-col justify-between border-r border-neutral-800 p-8 lg:flex">
        <div className="text-2xl font-bold text-primary">OBSCURA®</div>
        <div className="text-sm text-neutral-400">
          <span className="mr-4 cursor-pointer transition-colors hover:text-primary">
            Terms of Service
          </span>
          <span className="cursor-pointer transition-colors hover:text-primary">
            Privacy Policy
          </span>
        </div>
      </div>
      <div className="relative z-10 flex w-full flex-col items-center justify-between p-8 lg:w-1/2 lg:justify-center">
        <div className="w-full text-left lg:hidden">
          <div className="mb-8 text-2xl font-bold text-primary">OBSCURA®</div>
        </div>
        <div className="w-full max-w-md">
          <SignupForm />
        </div>
        <div className="mt-8 w-full text-center lg:hidden">
          <div className="text-sm text-neutral-400">
            <span className="mr-4 cursor-pointer transition-colors hover:text-primary">
              Terms of Service
            </span>
            <span className="cursor-pointer transition-colors hover:text-primary">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
