import React from "react";
import Body from "../../elements/Body";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsFillCartFill } from "react-icons/bs";
import { useCart } from "../../../context/cart";
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
  const { cart, toggleCart } = useCart();
  return (
    <div className="w-full h-full">
      <Body className="flex justify-between  items-center h-full w-full ">
        <div className=" md:w-[5rem] md:h-[5rem] h-12 w-12 overflow-auto rounded-full">
          <img className="h-full w-full" src="/images/logo.jpeg" />
        </div>
        <HiOutlineMenuAlt3 size={30} className="block md:hidden" />
        <div className=" gap-8 items-center hidden md:flex">
          <div
            onClick={toggleCart}
            className="capitalize font-semibold relative cursor-pointer"
          >
            {cart.numItems > 0 && (
              <span className="absolute -top-2 rounded-full bg-hmRed w-5 h-5 text-white -right-2 items-center justify-center flex">
                {cart.numItems}
              </span>
            )}

            <BsFillCartFill size={30} />
          </div>
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
