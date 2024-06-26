import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex gap-4 justify-between text-sm">
      {/* Avater */}
      <Image
        src="https://images.pexels.com/photos/20852624/pexels-photo-20852624/free-photo-of-woman-with-bottles-in-village.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        alt="user"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* Post */}
      <div className="flex-1">
        {/* TextInput */}
        <div className="flex gap-4">
          <textarea
            placeholder="what's on your mind?"
            className="bg-slate-100 rounded-lg flex-1 p-2 outline-none"
          />
          <Image
            src="/emoji.png"
            alt="emoji"
            width={20}
            height={20}
            className="cursor-pointer w-5 h-5 self-end"
          />
        </div>
        {/* post option */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="emoji" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addvideo.png" alt="emoji" width={20} height={20} />
            Vidoe
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="emoji" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="emoji" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
