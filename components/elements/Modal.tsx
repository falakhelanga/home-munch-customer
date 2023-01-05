import React, { useRef } from "react";

import DishDiscriptionModal from "../sections/home/DishDiscriptionModal";
import { useModal } from "../../context/modal";
import AuthModal from "../sections/auth/AuthModal";

interface ModalPropTypes {
  // children: React.ReactNode;
  backdropClassName?: string;
  contentClassName?: string;
  containerClassName?: string;
}

const Modal = ({
  // children,
  containerClassName,
  backdropClassName,
  contentClassName,
}: ModalPropTypes) => {
  const { closeModal, isModalOpen } = useModal();
  const modalRef = useRef(null);

  return (
    <div
      className={`h-screen w-screen fixed top-0 right-0 z-[20]  ${
        isModalOpen ? "flex" : "hidden"
      }  justify-center items-center ${containerClassName}`}
    >
      <div
        className={`bg-[rgba(0,0,0,0.9)] opacity-[0.9] absolute top-0 right-0 h-full w-full z-[21] ${backdropClassName}`}
        onClick={closeModal}
      ></div>
      <div ref={modalRef} className={`${contentClassName}  z-[22]`}>
        {isModalOpen === "description" && <DishDiscriptionModal />}
        {isModalOpen === "auth" && <AuthModal />}
      </div>
    </div>
  );
};

export default Modal;
