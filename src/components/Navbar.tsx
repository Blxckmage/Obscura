import Link from "next/link";
import { Button } from "./ui/button";
import { User } from "@/types/user.types";
import { signOut } from "@/auth";

const Navbar = ({ session }: { session?: User }) => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border border-b-neutral-600 bg-opacity-20 backdrop-blur-sm backdrop-filter">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold">
              Obscura
            </Link>
          </div>
          <div>
            {session ? (
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <Button type="submit" variant="secondary">
                    Log out
                  </Button>
                </form>
              </div>
            ) : (
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/auth/login">
                  <Button variant="ghost">Log in</Button>
                </Link>
                <Link href="/auth/signup">
                  <Button variant="secondary">Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
