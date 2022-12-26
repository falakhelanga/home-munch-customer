import React, { ReactNode } from "react";
import CartProvider from "./cart";

const Data = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <CartProvider>{children}</CartProvider>
    </div>
  );
};

export default Data;
