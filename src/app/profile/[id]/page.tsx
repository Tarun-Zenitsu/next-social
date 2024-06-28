import Feed from "@/components/Feed";
import LeftMenue from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex gap-6 pt-6">
      {/* Left */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenue type="profile" />
      </div>
      {/* Center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="https://images.pexels.com/photos/3238764/pexels-photo-3238764.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt="bgImg"
                fill
                className="object-cover rounded-md"
              />
              <Image
                src="https://images.pexels.com/photos/20347119/pexels-photo-20347119/free-photo-of-woman-in-conical-hat-working-on-rural-field.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt="bgImg"
                width={128}
                height={128}
                className="rounded-full w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">User Name</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.2k</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">5.1k</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      {/* right */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
};

export default Profile;
