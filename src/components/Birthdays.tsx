import Image from "next/image";
import Link from "next/link";
import React from "react";

const Birthday = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      {/* User */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/23643826/pexels-photo-23643826/free-photo-of-a-woman-standing-on-a-pier-with-a-dog.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="user"
            width={40}
            height={40}
            className="rounded-full w-10 h-10"
          />
          <span className="font-semibold">User name</span>
        </div>
        <div className="flex gap-3 ">
          <button className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      {/* upcoming */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src="/gift.png" alt="user" width={24} height={24} />
        <Link href="/" className="flex flex-col gap-1 text-sm">
          <span className="text-gray-700 font-semibold">Upcoming Birtdays</span>
          <span className="text-gray-500">See the others</span>
        </Link>
      </div>
    </div>
  );
};

export default Birthday;
