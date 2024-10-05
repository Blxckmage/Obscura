"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, userSchema } from "@/types/user.types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { handleSignup } from "@/lib/actions/auth.actions";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const form = useForm<User>({
    resolver: zodResolver(userSchema),
  });
  const router = useRouter();

  async function handleSubmit(data: User) {
    const response = await handleSignup(data);

    if (response.ok) {
      toast({
        description: "Account created successfully",
      });

      router.push("/auth/login");
    } else {
      toast({
        variant: "destructive",
        description: "Failed to create account",
      });

      router.refresh();
    }
  }

  return (
    <div className="flex w-full max-w-lg flex-col gap-8 p-8">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-center text-4xl font-bold">Create an account</h1>
        <p className="text-1xl text-center text-neutral-200">
          or{" "}
          <Link className="text-neutral-500 underline" href="/auth/login">
            sign in to your account
          </Link>
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="name">Username</FormLabel>
                <FormControl>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="text-md h-10 border-neutral-700 bg-neutral-800 px-4 py-3"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="text-md h-10 border-neutral-700 bg-neutral-800 px-4 py-3"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
}
