import React from "react";
import Title from "../../elements/Title";
import Body from "../../elements/Body";
import { MdDinnerDining, MdFreeBreakfast, MdLunchDining } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import Dishes from "./Dishes";
const Home = () => {
  return (
    <div className="mt-4">
      <div className=" bg-[#F9EFE1] pt-2 md:pt-0 ">
        <Body className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <h1
              style={{ fontFamily: "Satisfy, cursive" }}
              className="capitalize text-4xl font-bold mb-2 text-center md:text-left"
            >
              We serve the taste
            </h1>
            <h1
              style={{ fontFamily: "Satisfy, cursive" }}
              className="capitalize text-4xl font-bold text-center md:text-left"
            >
              you love😍
            </h1>
            <p className="my-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, nihil? Natus nihil earum qui perspiciatis quod a
              accusantium. Cum aperiam veniam unde
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-[25rem] aspect-square rounded-md overflow-hidden p-4">
              <img
                className="h-full w-full rounded-lg"
                src="/images/home-header-food-image.jpeg"
                alt="food image"
              />
            </div>
            <div className=" hidden md:flex flex-col gap-8">
              <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2">
                <MdFreeBreakfast size={27} />
                <span className="text-lg font-semibold">Break Fast</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2">
                <MdDinnerDining size={27} />
                <span className="text-lg font-semibold">Dinner</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2">
                <MdLunchDining size={27} />
                <span className="text-lg font-semibold">Lunch</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2">
                <GiHotMeal size={27} />
                <span className="text-lg font-semibold">Supper</span>
              </div>
            </div>
          </div>
        </Body>
      </div>
      <div className="mt-[6rem]">
        <div className="mb-[6rem] md:mb-[8rem]">
          <Dishes title="popular dishes" />
        </div>
        {/* <div className="mb-[6rem] md:mb-[8rem]">
          <Dishes title="nearby dishes" />
        </div>
        <div className="">
          <Dishes title="today's offers" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
