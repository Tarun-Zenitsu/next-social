import React from "react";
import FriendRequests from "./FriendRequests";
import Birthday from "./Birthdays";
import Add from "./Add";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <Birthday />
      <Add size="md" />
    </div>
  );
};

export default RightMenu;
