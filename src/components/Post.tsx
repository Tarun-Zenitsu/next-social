import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* user */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/20278818/pexels-photo-20278818/free-photo-of-model-wearing-a-black-dress-posing-against-a-wooden-door-and-a-clay-wall.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">User name</span>
        </div>
        <Image src="/more.png" alt="more" width={16} height={16} />
      </div>
      {/* desc */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/26632794/pexels-photo-26632794/free-photo-of-a-woman-in-a-white-dress-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="postImg"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
          consequatur culpa, aliquid repellat recusandae asperiores corrupti
          impedit nesciunt est voluptas earum quae eaque porro autem, esse
          error! Aperiam, dignissimos consequuntur.
        </p>
      </div>
      {/* intraction */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt="like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt="comment"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Comment</span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt="share"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Share</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
