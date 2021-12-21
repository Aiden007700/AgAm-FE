import Image from "next/image";
import Link from "next/link";
import SidebarLink from "./SidebarLink";
import { MenuIcon, MenuAlt4Icon, PencilIcon } from "@heroicons/react/outline";

const Sidebar = ({ active }) => {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full border-r-2 border-solid border-[#b9b9b9]">
      <div className="flex items-center justify-center w-28 h-14 p-0 xl:ml-24 rounded-full">
        <Link href="/">
          <a className="flex items-center justify-center">
            <Image
              src="https://pic.onlinewebfonts.com/svg/img_491370.png"
              width={30}
              height={30}
            />
            <span className="hidden xl:inline">AgMd</span>
          </a>
        </Link>
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink
          text="Simple"
          Icon={MenuAlt4Icon}
          active={active === "Simple"}
          push="/procedures/simple"
        />
        <SidebarLink
          text="Complex"
          Icon={MenuIcon}
          active={active === "Complex"}
          push="/procedures/complex"
        />
        <SidebarLink
          text="Editor"
          Icon={PencilIcon}
          active={active === "Editor"}
          push="/editor"
        />
      </div>
    </div>
  );
};

export default Sidebar;
