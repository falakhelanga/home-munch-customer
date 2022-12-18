import React from "react";
import Body from "../../elements/Body";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
interface NavItemsType {
  name: string;
  link: string;
}
const navItems: NavItemsType[] = [
  {
    name: "about us",
    link: "#",
  },
  {
    name: "restaurants",
    link: "#",
  },
  {
    name: "dishes",
    link: "#",
  },
];

const Header = () => {
  return (
    <div className="w-full h-full">
      <Body className="flex justify-between  items-center h-full w-full ">
        <div>
          <span>LOGO</span>
        </div>
        <HiOutlineMenuAlt3 size={30} className="block md:hidden" />
        <div className=" gap-8 items-center hidden md:flex">
          {navItems.map((item, idx) => {
            return (
              <Link href={item.link} key={idx}>
                <span className="capitalize font-semibold">{item.name}</span>
              </Link>
            );
          })}

          <span className="bg-hmYellow rounded-full py-2 px-3 font-semibold">
            COOK WITH US
          </span>
        </div>
      </Body>
    </div>
  );
};

export default Header;
