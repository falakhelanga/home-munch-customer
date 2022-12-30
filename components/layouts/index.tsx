import React from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import CartDrawer from "../sections/cart";

const LayOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CartDrawer />
      <div className="flex flex-col">
        <div className=" h-[10vh] w-full">
          <Header />
        </div>
        <div className=" h-[82vh] lg:h-[90vh] w-full overflow-auto pb-4">
          <Main>{children}</Main>
        </div>

        <div className=" h-[8vh] w-full md:hidden block sticky bottom-0  ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LayOut;
