// components/LeftMenu.tsx
import Link from "next/link";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import { menuItems } from "@/constants";
import Add from "./Add";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <div key={index}>
            <Link
              href={item.href}
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
            >
              <Image src={item.src} alt={item.alt} width={20} height={20} />
              <span>{item.label}</span>
            </Link>
            {index < menuItems.length - 1 && (
              <hr className="border-t-1 border-gray-50 w-36 self-center" />
            )}
          </div>
        ))}
      </div>
      <Add size="sm" />
    </div>
  );
};

export default LeftMenu;
