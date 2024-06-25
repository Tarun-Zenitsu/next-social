import Link from "next/link";
import React from "react";
import MobileMenue from "./MobileMenue";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24">
      {/* left */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-3xl text-blue-600">
          LinkUp
        </Link>
      </div>
      {/* center */}
      <div className="hidden md:block w-[50%] text-sm lg:flex justify-between">
        {/* links */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              alt="Homepage"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span>Home</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/friends.png"
              alt="Friends"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/stories.png"
              alt="Stories"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden lg:flex p-2 bg-slate-100 items-center rounded-lg justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent"
          />
          <Image src="/search.png" alt="search" width={14} height={14} />
        </div>
      </div>
      {/* right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="people" width={24} height={24} />
            </div>
            <div className="cursor-pointer">
              <Image src="/messages.png" alt="message" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/notifications.png"
                alt="notification"
                width={20}
                height={20}
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/login.png" alt="login" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Navbar;
