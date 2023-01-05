import React, { ReactNode } from "react";
import CartProvider from "./cart";
import FireBaseProvider from "./firebase";
import ModalProvider from "./modal";
import DishProvider from "./dishes";
import AuthProvider from "./auth";
import DrawerContextProvider from "./drawer/drawer";

const Data = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <FireBaseProvider>
        <AuthProvider>
          <CartProvider>
            <ModalProvider>
              <DishProvider>
                <DrawerContextProvider>{children}</DrawerContextProvider>
              </DishProvider>
            </ModalProvider>
          </CartProvider>
        </AuthProvider>
      </FireBaseProvider>
    </div>
  );
};

export default Data;
