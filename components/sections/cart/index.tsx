import React, { useMemo } from "react";
import { useCart } from "../../../context/cart";
import { FaCartPlus, FaTimes } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Body from "../../elements/Body";
import CartItem from "./CartItem";
import Button from "../../elements/Button";

const TAX = 2.5;
const CartDrawer = () => {
  const { toggleCart, openCart, cart } = useCart();
  const total = useMemo(() => {
    return (cart.total + TAX).toFixed(2);
  }, [cart]);
  return (
    <div>
      {/* desktop */}
      <div
        style={{
          transform: openCart ? "translateX(0%)" : "translateX(100%)",
          transition: "transform ease 0.5s",
        }}
        className="h-screen md:w-[27vw] w-screen md:block hidden bg-hmYellow fixed right-0 top-0 z-20"
      ></div>

      {/* mobile */}

      <div
        style={{
          transform: openCart ? "translateX(0%)" : "translateX(100%)",
          transition: "transform ease 0.5s",
        }}
        className="md:hidden block bg-[#f5f5f5]  fixed right-0 top-0 z-20 h-screen md:w-[27vw] w-screen  "
      >
        <div className="relative w-full h-full flex flex-col">
          <div
            onClick={toggleCart}
            className="flex-[0.1] bg-hmRed w-full items-center flex text-white  justify-between px-4"
          >
            <IoIosArrowBack size={30} />
            <span className="text-lg font-bold">My Cart</span>
          </div>
          {cart.numItems > 0 && (
            <>
              <div className="flex-[0.7] w-full px-4 py-4 gap-4 flex flex-col overflow-auto  ">
                {cart.items.map((item) => {
                  return <CartItem item={item} key={item.id} />;
                })}
              </div>
              <div className="flex-[0.2] px-4 w-full mb-4">
                <div className="bg-white p-3 mb-2 rounded-md">
                  <div className="flex w-full justify-between items-center text-gray-400 my-4 ">
                    <span>Items:</span>
                    <span className="font-bold">{cart.numItems}</span>
                  </div>
                  <div className="flex w-full justify-between items-center text-gray-400 ">
                    <span>Subtotal:</span>
                    <span className="font-bold">£ {cart.total.toFixed(2)}</span>
                  </div>
                  <div className="flex w-full justify-between items-center text-gray-400 my-4 ">
                    <span>Taxes:</span>
                    <span className="font-bold">£ {TAX.toFixed(2)}</span>
                  </div>
                  <div className="flex w-full justify-between items-center text-gray-400 my-4 ">
                    <span>Total:</span>
                    <span className="font-bold">£ {total}</span>
                  </div>
                </div>

                <Button className="text-white">CHECKOUT</Button>
              </div>
            </>
          )}
          {cart.numItems === 0 && (
            <>
              <div className=" flex-[0.9] w-full flex justify-center items-center text-[#f5f5f5] bg-white flex-col">
                <FaCartPlus size={200} />
                <div className="text-black mt-[4rem] text-center px-4">
                  <h1 className="text-2xl font-bold">Your cart is empty</h1>
                  <p className="mt-5 text-gray-300">
                    Looks like you haven&apos;t added any dishes to you cart
                    yet.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
