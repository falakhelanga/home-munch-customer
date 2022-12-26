import React from "react";
import Rates from "../../elements/Rates";
import { Avatar } from "../../elements/Avatar";
import { IoLocationSharp } from "react-icons/io5";
import { GiMeal } from "react-icons/gi";
import { Dish } from "../../../types/dish";
import { useCart } from "../../../context/cart";

interface DishPropTypes {
  dish: Dish;
}

const Dish = ({ dish }: DishPropTypes) => {
  const { chef, name, description } = dish;
  const { addToCart } = useCart();
  return (
    <div className="bg-[#F5F5F5] rounded-md flex flex-col overflow-hidden">
      <div className="px-4 py-2 bg-hmRed flex gap-3 items-center">
        <Avatar image="/images/avatar.jpg" />
        <div className="flex-1 flex flex-col items-start">
          <span className=" capitalize font-bold text-black">{chef.name}</span>
          <div className="flex gap-1 items-center">
            <IoLocationSharp className="text-black" />
            <span className="text-sm text-black">{chef.location}</span>
          </div>
          <div className="flex gap-1 items-center">
            <GiMeal className="text-black " />
            <span className="text-sm text-black">Fillipino</span>{" "}
            <span className="text-sm text-black">|</span>
            <span className="text-sm text-black">Asian</span>
          </div>
          <div className="mt-2">
            <Rates />
          </div>
        </div>
      </div>
      <div className=" aspect-sqaure">
        <img src="/images/food-image.jpg" className="h-full w-full" />
      </div>
      <div className="px-4 py-2 ">
        <div className="text-center font-semibold text-lg my-2">
          <span>{name}</span>
        </div>

        <div className="text-center my-2">
          <span>{description}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">£5.00</span>
          <span
            onClick={() => {
              addToCart({ ...dish, qty: 1 });
            }}
            className=" border border-[#FDE056] hover:bg-hmYellow   rounded-full px-4 py-2 font-semibold md:cursor-pointer"
          >
            Add To Cart
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dish;
