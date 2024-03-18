import { Bolt, GlobeIcon, Search, Smile } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sticky left-0 top-0 z-40 hidden h-screen w-[9.3rem] flex-col items-start justify-between overflow-y-auto bg-zinc-950 p-2 py-8 text-zinc-50 lg:flex">
      <div>
        <h1 className="text-2xl font-bold uppercase">Obscura</h1>
      </div>
      <div>
        <ul>
          <li className="flex flex-col space-y-8 text-2xl">
            <Link
              href="/"
              className="flex items-center space-x-1 hover:underline"
            >
              <GlobeIcon />
              <span>Explore</span>
            </Link>
            <Link
              href="/username"
              className="flex items-center space-x-1 hover:underline"
            >
              <Smile />
              <span>Profile</span>
            </Link>
            <Link
              href="/search"
              className="flex items-center space-x-1 hover:underline"
            >
              <Search />
              <span>Search</span>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="flex flex-col space-y-4 text-2xl">
            <Link
              href="/user/account"
              className="flex items-center space-x-1 hover:underline"
            >
              <Bolt />
              <span>Account</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
