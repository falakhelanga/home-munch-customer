import React, { useState } from "react";
import Dish from "./Dish";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { doc, onSnapshot, collection } from "firebase/firestore";

import Body from "../../elements/Body";
import { useFireBase } from "../../../context/firebase";
import { DishType } from "../../../types/dish";
interface DishesPropTypes {
  title: string;
}

// const dishes: Dish[] = [
//   {
//     chef: {
//       name: "falakhe",
//       rates: 4,
//       image_url: "/images/avatar.jpg",
//       location: "johanessburg",
//       id: 1,
//     },
//     id: 1,
//     name: "Steak",
//     image_url: "/images/food-image.jpg",
//     price: 5,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, praesentium magni! Magnam dolore aut aliquid?",
//   },
//   {
//     chef: {
//       name: "falakhe",
//       rates: 4,
//       image_url: "/images/avatar.jpg",
//       location: "johanessburg",
//       id: 2,
//     },
//     id: 2,
//     name: "Steak",
//     image_url: "/images/food-image.jpg",
//     price: 5,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, praesentium magni! Magnam dolore aut aliquid?",
//   },
//   {
//     chef: {
//       name: "falakhe",
//       rates: 4,
//       image_url: "/images/avatar.jpg",
//       location: "johanessburg",
//       id: 3,
//     },
//     id: 3,
//     name: "Steak",
//     image_url: "/images/food-image.jpg",
//     price: 5,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, praesentium magni! Magnam dolore aut aliquid?",
//   },
//   {
//     chef: {
//       name: "falakhe",
//       rates: 4,
//       image_url: "/images/avatar.jpg",
//       location: "johanessburg",
//       id: 4,
//     },
//     id: 4,
//     name: "Steak",
//     image_url: "/images/food-image.jpg",
//     price: 5,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, praesentium magni! Magnam dolore aut aliquid?",
//   },
//   {
//     chef: {
//       name: "falakhe",
//       rates: 4,
//       image_url: "/images/avatar.jpg",
//       location: "johanessburg",
//       id: 5,
//     },
//     id: 5,
//     name: "Steak",
//     image_url: "/images/food-image.jpg",
//     price: 5,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, praesentium magni! Magnam dolore aut aliquid?",
//   },
//   {
//     chef: {
//       name: "falakhe",
//       rates: 4,
//       image_url: "/images/avatar.jpg",
//       location: "johanessburg",
//       id: 6,
//     },
//     id: 6,
//     name: "Steak",
//     image_url: "/images/food-image.jpg",
//     price: 5,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, praesentium magni! Magnam dolore aut aliquid?",
//   },
//   {
//     chef: {
//       name: "falakhe",
//       rates: 4,
//       image_url: "/images/avatar.jpg",
//       location: "johanessburg",
//       id: 7,
//     },
//     id: 7,
//     name: "Steak",
//     image_url: "/images/food-image.jpg",
//     price: 5,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, praesentium magni! Magnam dolore aut aliquid?",
//   },
//   {
//     chef: {
//       name: "falakhe",
//       rates: 4,
//       image_url: "/images/avatar.jpg",
//       location: "johanessburg",
//       id: 8,
//     },
//     id: 8,
//     name: "Steak",
//     image_url: "/images/food-image.jpg",
//     price: 5,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, praesentium magni! Magnam dolore aut aliquid?",
//   },
//   {
//     chef: {
//       name: "falakhe",
//       rates: 4,
//       image_url: "/images/avatar.jpg",
//       location: "johanessburg",
//       id: 9,
//     },
//     id: 9,
//     name: "Steak",
//     image_url: "/images/food-image.jpg",
//     price: 5,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, praesentium magni! Magnam dolore aut aliquid?",
//   },
//   {
//     chef: {
//       name: "falakhe",
//       rates: 4,
//       image_url: "/images/avatar.jpg",
//       location: "johanessburg",
//       id: 10,
//     },
//     id: 10,
//     name: "Steak",
//     image_url: "/images/food-image.jpg",
//     price: 5,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, praesentium magni! Magnam dolore aut aliquid?",
//   },
//   {
//     chef: {
//       name: "falakhe",
//       rates: 4,
//       image_url: "/images/avatar.jpg",
//       location: "johanessburg",
//       id: 11,
//     },
//     id: 11,
//     name: "Steak",
//     image_url: "/images/food-image.jpg",
//     price: 5,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, praesentium magni! Magnam dolore aut aliquid?",
//   },
//   {
//     chef: {
//       name: "falakhe",
//       rates: 4,
//       image_url: "/images/avatar.jpg",
//       location: "johanessburg",
//       id: 12,
//     },
//     id: 12,
//     name: "Steak",
//     image_url: "/images/food-image.jpg",
//     price: 5,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, praesentium magni! Magnam dolore aut aliquid?",
//   },
//   {
//     chef: {
//       name: "falakhe",
//       rates: 4,
//       image_url: "/images/avatar.jpg",
//       location: "johanessburg",
//       id: 13,
//     },
//     id: 13,
//     name: "Steak",
//     image_url: "/images/food-image.jpg",
//     price: 5,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, praesentium magni! Magnam dolore aut aliquid?",
//   },
// ];

const Dishes = ({ title }: DishesPropTypes) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [dishes, setDishes] = useState<Array<DishType>>([]);
  const { db } = useFireBase();
  // const q = query(collection(db, "cities"), where("state", "==", "CA"));
  const unsubscribe = onSnapshot(collection(db, "dishes"), (querySnapshot) => {
    let dishes: any = [];
    querySnapshot.forEach((doc) => {
      dishes.push(doc.data());
    });
    setDishes(dishes);
    console.log("Current cities in CA: ", dishes);
  });

  return (
    <>
      {/* DESKTOP */}
      <Body>
        <div className="hidden md:block mt-8">
          <h1 className="font-semibold capitalize text-3xl mb-4">{title}</h1>
          <div className=" relative">
            <Swiper
              slidesPerView={4}
              navigation={{ prevEl, nextEl }}
              spaceBetween={25}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                el: ".features_dot",
                clickable: true,
                renderBullet: (index, className) => {
                  return (
                    '<span class="' + className + '">' + (index + 1) + "</span>"
                  );
                },
              }}
              modules={[Pagination, Navigation]}
              className=" w-full "
            >
              {dishes.length > 0 &&
                dishes.map((dish) => (
                  <SwiperSlide className="" key={dish.id}>
                    <Dish dish={dish} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div
              ref={(node) => setPrevEl(node)}
              style={{
                zIndex: 10,
                // backdropFilter: "blur(2px)",
                // backgroundColor: "rgba(0,0,0,0.2)",
                // top: "%",
                left: "0rem",
              }}
              className="absolute cursor-pointer  w-14 px-2 top-0 h-full flex items-center"
            >
              <div
                // ref={(node) => setPrevEl(node)}
                style={{
                  padding: "0.6rem",
                  height: "2.5rem",
                  width: "2.5rem",
                  backgroundColor: "rgba(0,0,0,0.8)",

                  zIndex: 12,
                }}
                className=" md-cursor-pointer   flex justify-center items-center rounded-full"
              >
                <BsChevronLeft color="white" />
              </div>
            </div>
            <div
              ref={(node) => setNextEl(node)}
              style={{
                zIndex: 10,
                // backdropFilter: "blur(2px)",
                // backgroundColor: "rgba(0,0,0,0.2)",
                // top: "%",
                right: "0rem",
              }}
              className="absolute  cursor-pointer w-14 px-2 top-0 h-full flex items-center"
            >
              <div
                // ref={(node) => setNextEl(node)}
                style={{
                  padding: "0.6rem",
                  height: "2.5rem",
                  width: "2.5rem",
                  backgroundColor: "rgba(0,0,0,0.8)",
                }}
                className=" md-cursor-pointer   flex justify-center items-center rounded-full"
              >
                <BsChevronRight color="white" />
              </div>
            </div>
          </div>
        </div>
      </Body>
      {/* MOBILE */}
      <div className="block md:hidden mt-8">
        <Body>
          <h1 className="font-semibold capitalize text-2xl mb-4">{title}</h1>
        </Body>

        <div className="relative">
          <Swiper
            slidesPerView={1.2}
            // navigation={{ prevEl, nextEl }}
            spaceBetween={10}
            slidesPerGroup={1}
            loop={true}
            centeredSlides={true}
            loopFillGroupWithBlank={true}
            // pagination={{
            //   el: ".features_dot",
            //   clickable: true,
            //   renderBullet: (index, className) => {
            //     return (
            //       '<span class="' + className + '">' + (index + 1) + "</span>"
            //     );
            //   },
            // }}
            // modules={[Pagination, Navigation]}
            className=" w-full "
          >
            {dishes.length > 0 &&
              dishes.map((dish) => (
                <SwiperSlide className="" key={dish.id}>
                  <Dish dish={dish} />
                </SwiperSlide>
              ))}
          </Swiper>
          <div
            style={{
              zIndex: 10,

              left: "0rem",
            }}
            className="absolute hidden  backdrop-blur-md bg-white/60 w-14 pl-3 top-0 h-full flex items-center"
          >
            <div
              //   ref={(node) => setPrevEl(node)}
              style={{
                padding: "0.6rem",
                height: "2.5rem",
                width: "2.5rem",
                backgroundColor: "rgba(0,0,0,0.8)",

                zIndex: 12,
              }}
              className=" md-cursor-pointer   flex justify-center items-center rounded-full"
            >
              <BsChevronLeft color="white" />
            </div>
          </div>
          <div
            style={{
              zIndex: 10,

              right: "0rem",
            }}
            className="absolute backdrop-blur-md bg-white/60 hidden  w-14 px-2 top-0 h-full flex items-center"
          >
            <div
              //   ref={(node) => setNextEl(node)}
              style={{
                padding: "0.6rem",
                height: "2.5rem",
                width: "2.5rem",
                backgroundColor: "rgba(0,0,0,0.8)",
              }}
              className=" md-cursor-pointer   flex justify-center items-center rounded-full"
            >
              <BsChevronRight color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dishes;
