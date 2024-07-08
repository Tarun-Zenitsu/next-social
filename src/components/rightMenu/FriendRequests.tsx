import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requiests</span>
        <Link href="/" className="text-blue-500 text-sm">
          See all
        </Link>
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
          <Image src="/accept.png" alt="accept" width={20} height={20} />
          <Image src="/reject.png" alt="reject" width={20} height={20} />
        </div>
      </div>
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
          <Image src="/accept.png" alt="accept" width={20} height={20} />
          <Image src="/reject.png" alt="reject" width={20} height={20} />
        </div>
      </div>
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
          <Image src="/accept.png" alt="accept" width={20} height={20} />
          <Image src="/reject.png" alt="reject" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
