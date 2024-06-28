import Feed from "@/components/Feed";
import LeftMenue from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import React from "react";

const Profile = () => {
  return (
    <div className="flex gap-6 pt-6">
      {/* Left */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenue />
      </div>
      {/* Center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
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
