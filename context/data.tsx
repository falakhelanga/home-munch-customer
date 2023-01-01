import React, { ReactNode } from "react";
import CartProvider from "./cart";
import FireBaseProvider from "./firebase";
import ModalProvider from "./modal";
import DishProvider from "./dishes";

const Data = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <FireBaseProvider>
        <CartProvider>
          <ModalProvider>
            <DishProvider>{children}</DishProvider>
          </ModalProvider>
        </CartProvider>
      </FireBaseProvider>
    </div>
  );
};

export default Data;
