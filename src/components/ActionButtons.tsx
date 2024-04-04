import { AlignJustify, Bolt, GlobeIcon, Search, Smile } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetFooter,
} from "./ui/sheet";
import Link from "next/link";
import UserActionButton from "./UserActionButton";
import { auth } from "@/auth";

const ActionButton = async () => {
  const session = await auth();
  return (
    <Sheet>
      <SheetTrigger asChild className="hover:cursor-pointer">
        <AlignJustify />
      </SheetTrigger>
      <SheetContent className="border-l-zinc-800 bg-zinc-950 text-zinc-50">
        <SheetHeader>
          <SheetDescription>
            <div className="mt-10 flex w-full flex-col items-start space-y-10 text-3xl text-zinc-50 ">
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
              <Link
                href="/user/account"
                className="flex items-center space-x-1 hover:underline"
              >
                <Bolt />
                <span>Account</span>
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
        {!session ? (
          <SheetFooter>
            <div className="mt-10 flex w-full items-center justify-center text-3xl">
              <UserActionButton />
            </div>
          </SheetFooter>
        ) : null}
      </SheetContent>
    </Sheet>
  );
};

export default ActionButton;
