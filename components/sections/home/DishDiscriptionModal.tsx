import React, { useState } from "react";
import { useDish } from "../../../context/dishes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import TextAreaInput from "../../elements/TextAreaInput";
import Form from "../../elements/Form";
import Button from "../../elements/Button";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "../../../context/cart";
import { useModal } from "../../../context/modal";

const DishDiscriptionModal = () => {
  const { selectedDish } = useDish();
  const { addToCart } = useCart();
  const { closeModal } = useModal();
  console.log(selectedDish, "selected");
  const [qty, setQty] = useState(1);

  const increament = () => {
    setQty((currState) => currState + 1);
  };
  const decreament = () => {
    if (qty === 1) return;
    setQty((currState) => currState - 1);
  };
  return (
    <div className="md:w-[60vw] w-[90vw] flex flex-col">
      <div className="w-full md:h-[28rem] h-[10rem] overflow-hidden">
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
          {selectedDish?.imageGallery?.map((image, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img className="h-full w-full" src={image} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="bg-white p-6 flex-[0.7] ">
        <h1 className="text-xl mb-2">{selectedDish?.name}</h1>
        <div className="text-gray-400">{selectedDish?.description}</div>
        <div className="mt-4">
          <span className="text-gray-400">Allergens:</span>{" "}
          <span className="ml-2">Soya, Peanuts</span>
        </div>
        <div className="mt-2">
          <span className="text-gray-400">Dish Type:</span>
          <span className="ml-2"> {selectedDish?.dishType}</span>
        </div>
        <div className="mt-2">
          <span className="text-gray-400">Cuisine Type:</span>
          <span className="ml-2">{selectedDish?.cuisineType}</span>
        </div>
        <Form
          className="mt-4"
          initialValues={{ specialInstructions: "" }}
          onSubmit={(values) => {
            addToCart({
              ...selectedDish!!,
              specialInstructions: values.specialInstructions,
              cartQty: qty,
            });
            closeModal();
          }}
        >
          <TextAreaInput
            label="Special Instructions"
            name="specialInstructions"
            inputClassNames="border rounded-lg"
            placeholder="Not too spicy? Dressing on the side? let us know here."
            rows="5"
          />
          <div className="flex-col md:flex-row gap-4 flex justify-between mt-4">
            <div>
              <div className="flex items-center cursor-pointer">
                <span
                  onClick={decreament}
                  className="bg-gray-400 text-white py-2 px-3 rounded-l-lg font-bold"
                >
                  <AiOutlineMinus size={20} />
                </span>
                <span className="px-5 border-y py-[0.3rem]">{qty}</span>
                <span
                  onClick={increament}
                  className="bg-gray-400 text-white py-2 px-3 rounded-r-lg"
                >
                  <AiOutlinePlus size={20} />
                </span>
              </div>
            </div>
            <div>
              <Button
                type="submit"
                // onClick={() => {
                //   addToCart({ ...selectedDish!!, cartQty: qty });
                // }}
                className="text-white rounded-full p-0"
              >
                <span className="text-sm">ADD TO CART </span>{" "}
                <span className="text-sm">£{selectedDish?.price}</span>
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default DishDiscriptionModal;
