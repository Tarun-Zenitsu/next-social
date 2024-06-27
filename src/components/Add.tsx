import Image from "next/image";
import React from "react";

const Add = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* top */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Add</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* bottom */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/26591139/pexels-photo-26591139/free-photo-of-a-small-bird-perched-on-a-stick.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="addImg"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26591139/pexels-photo-26591139/free-photo-of-a-small-bird-perched-on-a-stick.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="addImg"
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />

          <span className="text-blue-500 font-medium">BigCaf Loune</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            : size === "md"
            ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias architecto, eum dolorem nostrum tempore ipsa,"
            : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias architecto, eum dolorem nostrum tempore ipsa, Dignissimos molestias architecto, eum dolorem nostrum tempore ipsa,reiciendis iste, quo sint consequatur magni. Reprehenderit, corrupticumque! Aut optio laborum nesciunt iure! "}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Add;
