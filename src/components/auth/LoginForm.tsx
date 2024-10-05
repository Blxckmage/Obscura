import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Label } from "../ui/label";
import { auth, signIn } from "@/auth";

export default async function LoginForm() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-8 p-8">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-center text-4xl font-bold">Sign in</h1>
        <p className="text-1xl text-center text-neutral-200">
          or{" "}
          <Link className="text-neutral-500 underline" href="/auth/signup">
            create an account
          </Link>
        </p>
      </div>
      <form
        className="space-y-5"
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        {/* NOTE: Imagine not being able to use the `redirectTo` while also passing form data to the signIn function. I genuinely hate auth.js for this. */}

        <input type="hidden" name="redirectTo" value="/" />
        <div className="space-y-2">
          <Label htmlFor="name">Username</Label>
          <Input
            name="username"
            placeholder="Enter your name"
            className="text-md h-10 border-neutral-700 bg-neutral-800 px-4 py-3"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="text-md h-10 border-neutral-700 bg-neutral-800 px-4 py-3"
          />
        </div>

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  );
}
