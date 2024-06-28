import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/20321168/pexels-photo-20321168/free-photo-of-couple-checking-a-map.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="backgroundImg"
          fill
          className="rounded-md"
        />
        <Image
          src="https://images.pexels.com/photos/26704978/pexels-photo-26704978/free-photo-of-a-cat-is-sitting-on-a-ledge-next-to-a-bowl.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="ProfileImg"
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
          width={48}
          height={48}
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">User Name</span>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <Image
              src="https://images.pexels.com/photos/26704978/pexels-photo-26704978/free-photo-of-a-cat-is-sitting-on-a-ledge-next-to-a-bowl.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="ProfileImg"
              className="rounded-full w-3 h-3"
              width={12}
              height={12}
            />
            <Image
              src="https://images.pexels.com/photos/26704978/pexels-photo-26704978/free-photo-of-a-cat-is-sitting-on-a-ledge-next-to-a-bowl.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="ProfileImg"
              className="rounded-full w-3 h-3"
              width={12}
              height={12}
            />
            <Image
              src="https://images.pexels.com/photos/26704978/pexels-photo-26704978/free-photo-of-a-cat-is-sitting-on-a-ledge-next-to-a-bowl.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="ProfileImg"
              className="rounded-full w-3 h-3"
              width={12}
              height={12}
            />
          </div>
          <span className=" text-xs text-gray-500">500 followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
