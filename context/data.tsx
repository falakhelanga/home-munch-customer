import React, { ReactNode } from "react";
import CartProvider from "./cart";
import FireBaseProvider from "./firebase";

const Data = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <FireBaseProvider>
        <CartProvider>{children}</CartProvider>
      </FireBaseProvider>
    </div>
  );
};

export default Data;
