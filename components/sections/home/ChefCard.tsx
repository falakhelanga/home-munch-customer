import React from "react";
import { Avatar } from "../../elements/Avatar";
import { IoLocationSharp } from "react-icons/io5";
import Rates from "../../elements/Rates";
import { GiMeal } from "react-icons/gi";
import { useRouter } from "next/router";

const ChefCard = ({ chef }: { chef: any }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/dishes/${chef.id}`);
      }}
      className=" cursor-pointer rounded-md flex flex-col overflow-hidden  h-[18rem] hover:scale-105 transition-all"
    >
      {/* <div className="px-4 py-2 bg-white flex gap-3 items-center">
        <Avatar image="/images/avatar.jpg" />
        <div className="flex-1 flex flex-col items-start">
          <span className=" capitalize font-bold text-black">
            falakhe kitchen
          </span>
      
          <div className="mt-2">
            <Rates />
          </div>
        </div>
      </div> */}
      <div className="   overflow-hidden">
        <img src={chef.backgroundImage} className="h-full w-full" />
      </div>

      <div className=" py-2 flex justify-between">
        <div>
          <span className="text-lg font-semibold">{chef.kitchenName}</span>
          <div className="flex gap-1 items-center">
            <IoLocationSharp className="text-black" />
            <span className="text-sm text-black truncate max-w-[90%]">
              {chef.zipCode}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center h-8 w-8 bg-gray-200 rounded-full mr-2 text-sm">
          4.5
        </div>
        {/* <div className="flex gap-1 items-center mt-4">
          <GiMeal className="text-black " />
          <span className="text-sm text-black">asian</span>
        </div> */}
      </div>
    </div>
  );
};

export default ChefCard;
