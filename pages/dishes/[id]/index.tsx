import React, { useEffect, useState } from "react";
import Dishes from "../../../components/sections/home/Dishes";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { useFireBase } from "../../../context/firebase";
import Body from "../../../components/elements/Body";
import Rates from "../../../components/elements/Rates";
import { IoLocationSharp } from "react-icons/io5";

const DishesPage = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const { db } = useFireBase();
  const [chef, setChef] = useState<any>(null);
  useEffect(() => {
    (async () => {
      if (id) {
        const docRef = doc(db, "chefs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("chef:", docSnap.data());
          setChef({ ...docSnap.data(), id: docSnap.id });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }
    })();
  }, [id, db]);
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${chef?.backgroundImage})` }}
        className="w-full h-[40vh] bg-center bg-cover bg-no-repeat hidden md:block"
      >
        <Body className=" h-full flex justify-end items-center text-white ">
          <div className="backdrop-blur-md p-4 rounded-lg max-w-[60%]">
            <h2 className="text-4xl font-bold capitalize">
              {chef?.kitchenName}
            </h2>
            <p className="text-lg my-2">{chef?.kitchenBio}</p>
            <Rates />
            <div className="flex items-center mt-2 gap-1">
              <IoLocationSharp />
              <span>{chef?.zipCode}</span>
            </div>
          </div>
        </Body>
      </div>

      <Body className="-mt-[8rem] md:block hidden">
        <img
          src={chef?.profileImage}
          className="h-[15rem] w-[15rem] rounded-full border-[#FFFCF7] border-[0.5rem]"
          alt="profile image"
        />
      </Body>
      {/* mobile */}
      <div
        style={{ backgroundImage: `url(${chef?.backgroundImage})` }}
        className="w-full h-[40vh] bg-center bg-cover bg-no-repeat block md:hidden"
      ></div>
      <Body className="-mt-[8rem] md:hidden block flex justify-center">
        <img
          src={chef?.profileImage}
          className="h-[15rem] w-[15rem] rounded-full border-[#FFFCF7] border-[0.5rem]"
          alt="profile image"
        />
      </Body>
      <Body className="block md:hidden">
        <div className="flex flex-col items-center mt-2">
          <h2 className="text-2xl font-bold capitalize mb-2">
            {chef?.kitchenName}
          </h2>
          <Rates />
          <div className="text-center mt-2">{chef?.zipCode}</div>
        </div>
      </Body>

      <Dishes />
    </div>
  );
};

export default DishesPage;
