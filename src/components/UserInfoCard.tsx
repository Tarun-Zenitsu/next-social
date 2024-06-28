import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-sm">
          See all
        </Link>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">user shorname</span>
          <span className="text-sm">username</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          quam iusto nostrum error, esse quae accusamus voluptate expedita
          veritatis, tempore eum asperiores nisi{" "}
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" width={16} height={16} alt="city" />
          <span>
            Living in <b className="">India</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" width={16} height={16} alt="school" />
          <span>
            Went to <b className="">UGHS,Lingmarni</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" width={16} height={16} alt="work" />
          <span>
            Work at <b className="">Hyderabad</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" width={16} height={16} alt="link" />
            <Link href="#" className="text-blue-500 font-medium">
              Tarun.com
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" width={16} height={16} alt="link" />
            <span>Joined Novembar 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
