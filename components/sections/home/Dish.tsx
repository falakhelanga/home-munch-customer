import React from "react";
import Rates from "../../elements/Rates";
import { Avatar } from "../../elements/Avatar";
import { IoLocationSharp } from "react-icons/io5";
import { GiMeal } from "react-icons/gi";
import { DishType } from "../../../types/dish";
import { useCart } from "../../../context/cart";
import { getObjFromLink } from "../../../helpers";
import { BsPlusLg } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

interface DishPropTypes {
  dish: DishType;
}

const Dish = ({ dish }: DishPropTypes) => {
  const { chefLink, name, description } = dish;
  const { addToCart } = useCart();
  console.log(dish, "dish");
  return (
    <div className="bg-[#F5F5F5] rounded-md flex flex-col overflow-hidden relative">
      <div
        onClick={() => {
          addToCart({ ...dish, cartQty: 1 });
        }}
        className="z-[5] text-sm bg-white rounded-lg p-1 text-hmRed gap-2 cursor-pointer  flex items-center justify-center absolute top-4 right-4"
      >
        <BsPlusLg />
        <span>ADD</span>
      </div>
      <div className="flex-[0.7] overflow-hidden">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          // pagination={{
          //   clickable: true,
          // }}
        >
          {dish?.imageGallery.map((image, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img className="h-full w-full" src={image} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="py-4 px-2 flex flex-col">
        <span className="font-semibold text-lg">{dish.name}</span>
        <span>£ {dish.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Dish;
