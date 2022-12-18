import React from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

const LayOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <div className=" h-[10vh] w-full">
        <Header />
      </div>
      <div className=" h-[82vh] lg:h-[90vh] w-full overflow-auto pb-4">
        <Main>{children}</Main>
      </div>

      <div className=" h-[8vh] w-full md:hidden block ">
        <Footer />
      </div>
    </div>
  );
};

export default LayOut;
