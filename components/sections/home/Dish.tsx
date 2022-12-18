import React from "react";
import Rates from "../../elements/Rates";

const Dish = () => {
  return (
    <div className="bg-[#F5F5F5] rounded-md flex flex-col px-4 py-2 overflow-hidden">
      <div className=" aspect-sqaure">
        <img src="/images/food-image.jpg" className="h-full w-full" />
      </div>
      <div className="text-center font-semibold text-lg my-2">
        <span>Steak</span>
      </div>
      <div className="flex justify-center">
        <Rates />
      </div>
      <div className="text-center my-2">
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          fugiat.
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold">£5.00</span>
        <span className=" border border-[#FDE056]   rounded-full px-4 py-2 font-semibold">
          Add To Cart
        </span>
      </div>
    </div>
  );
};

export default Dish;
