import React from "react";
import FriendRequests from "./FriendRequests";
import Birthday from "./Birthdays";
import Add from "./Add";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
      <Birthday />
      <Add size="md" />
    </div>
  );
};

export default RightMenu;
