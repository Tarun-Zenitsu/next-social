"use client";

import { switchFollow } from "@/lib/action";
import React, { useState } from "react";

const UserInfoCardInteraction = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent,
  });

  const follow = async () => {
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: !prev.following,
        followingRequestSent:
          !prev.following && !prev.followingRequestSent ? true : false,
      }));
    } catch (error) {
      console.error("Error following/unfollowing user:", error);
    }
  };

  return (
    <>
      <form onSubmit={follow}>
        <button
          type="submit"
          className="bg-blue-500 w-full text-white text-sm rounded-md p-2"
        >
          {userState.following
            ? "Following"
            : userState.followingRequestSent
            ? "Follow Request Sent"
            : "Follow"}
        </button>
      </form>
      <form onSubmit={() => {}} className="self-end">
        <span className="text-red-400 self-end text-xs cursor-pointer">
          {userState.blocked ? "Unblock User" : "Block User"}
        </span>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
