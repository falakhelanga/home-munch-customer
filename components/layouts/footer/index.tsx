import React from "react";
import { AiFillHome } from "react-icons/ai";
import Body from "../../elements/Body";
import Link from "next/link";
import { MdManageSearch, MdOutlineManageSearch } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { useCart } from "../../../context/cart";
const Footer = () => {
  const { cart, toggleCart } = useCart();
  return (
    <div className="  bg-[#F5F5F5] h-full">
      <div className="flex justify-around h-full items-center">
        <Link className="flex flex-col items-center text-hmYellow " href={"/"}>
          <AiFillHome size={26} />
          <span>Home</span>
        </Link>
        <Link className="flex flex-col items-center" href={"#"}>
          <MdOutlineManageSearch size={32} />
          <span>Browse</span>
        </Link>
        <div
          onClick={toggleCart}
          className="flex flex-col items-center relative"
        >
          <RiShoppingCart2Fill size={26} />
          {cart.numItems > 0 && (
            <span className="absolute -top-2 rounded-full bg-hmRed w-5 h-5 text-white -right-2 items-center justify-center flex">
              {cart.numItems}
            </span>
          )}
          <span>Cart</span>
        </div>
        <Link className="flex flex-col items-center" href={"#"}>
          <FaUserAlt size={26} />
          <span>Account</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
