import Link from "next/link";
import React from "react";
import MobileMenue from "./MobileMenue";
import Image from "next/image";

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
      <div className="hidden md:block w-[50%] text-sm">
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
      </div>
      {/* right */}
      <div className="w-[30%] flex gap-4 xl:gap-8 justify-end">
        <MobileMenue />
      </div>
    </div>
  );
};

export default Navbar;
