import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartItem } from "../../../types/cart";
import { useCart } from "../../../context/cart";
const Increamentor = ({ item }: { item: CartItem }) => {
  const { addToCart, removeFromCart } = useCart();
  return (
    <div className="flex items-center cursor-pointer">
      <span
        onClick={() => {
          // addToCart(item)
          removeFromCart(item);
        }}
        className="bg-gray-400 text-white py-2 px-1 rounded-l-lg"
      >
        <AiOutlineMinus size={20} />
      </span>
      <span className="px-2 border-y py-[0.3rem]">{item.cartQty}</span>
      <span
        onClick={() => {
          addToCart(item);
          //   removeFromCart(item);
        }}
        className="bg-gray-400 text-white py-2 px-1 rounded-r-lg"
      >
        <AiOutlinePlus size={20} />
      </span>
    </div>
  );
};

export default Increamentor;
