import React from "react";
import Increamentor from "./Increamenter";
import { BsFillTrashFill } from "react-icons/bs";
import { CartItem } from "../../../types/cart";
import { useCart } from "../../../context/cart";

const CartItem = ({ item }: { item: CartItem }) => {
  const { deleteItem } = useCart();
  return (
    <div className="flex bg-white py-2 px-3 rounded-md gap-3 h-[6rem] relative ">
      <div
        onClick={() => {
          deleteItem(item);
        }}
        className="text-hmRed absolute top-2 right-5 cursor-pointer"
      >
        <BsFillTrashFill className="" size={20} />
      </div>
      <div className="rounded-md  overflow-hidden w-[5rem] aspect-square ">
        <img
          className="h-full w-full"
          src={item.imageGallery[0]}
          alt="dish image"
        />
      </div>
      <div className="flex flex-col text-gray-400 font-bold h-full items-start justify-center flex-1 ">
        <span>{item.name}</span>
        <div className="flex justify-between w-full items-center">
          <span>£ {item.price.toFixed(2)}</span>
          <Increamentor item={item} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
