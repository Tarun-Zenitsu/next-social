import React from "react";
import FriendRequests from "./FriendRequests";
import Birthday from "./Birthdays";
import Add from "./Add";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <UserInfoCard user={user} />
          <UserMediaCard user={user} />
        </>
      ) : null}
      <FriendRequests />
      <Birthday />
      <Add size="md" />
    </div>
  );
};

export default RightMenu;
