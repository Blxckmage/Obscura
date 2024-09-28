import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
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
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="/">
                <Button variant="secondary">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
