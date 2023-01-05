import React, { useRef, useState } from "react";
import { useDrawer } from "../../context/drawer/drawer";
import useClickOutside from "../../hooks/useClickOutSide";
import { IoClose } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../context/auth";

const SideDrawer = () => {
  const { isDrawerOpen, closeDrawer, drawerTitle } = useDrawer();
  const drawerRef = useRef(null);
  const { logOut } = useAuth();
  const handleCloseDrawer = () => {
    if (isDrawerOpen) {
      closeDrawer();
    }
  };
  useClickOutside(drawerRef, handleCloseDrawer);
  return (
    <div
      // ref={drawerRef}
      style={{
        transform: isDrawerOpen ? "translateX(0%)" : "translateX(100%)",
        transition: "transform ease 0.5s",
      }}
      className="h-screen md:w-[27vw] w-screen md:flex flex-col hidden bg-hmYellow fixed right-0 top-0 z-20 px-4 text-black "
    >
      <div className="flex flex-col my-3 h-full  ">
        <div className="flex flex-[0.1] justify-between  items-center ">
          <span className="font-bold text-2xl capitalize">{drawerTitle}</span>
          <div onClick={closeDrawer} className="text-black  cursor-pointer">
            <IoClose size={30} />
          </div>
        </div>
        <div className="flex-[0.9]  overflow-auto flex flex-col gap-3"></div>
        <div
          onClick={async () => {
            await logOut();
            closeDrawer();
          }}
          className="flex-[0.1] cursor-pointer  flex justify-between w-full absolute bottom-0 right-0 text-xl font-bold bg-[#f5f5f5] px-4 py-6"
        >
          <span className="uppercase">log out</span>
          <FiLogOut />
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
