import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import { useFireBase } from "../../../context/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Chefs = () => {
  const [chefs, setChefs] = useState<Array<any>>([]);
  const { db } = useFireBase();
  // const q = query(collection(db, "cities"), where("state", "==", "CA"));

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "chefs"), (querySnapshot) => {
      let chefs: any = [];
      querySnapshot.forEach((doc) => {
        chefs.push({ ...doc.data(), id: doc.id });
      });

      setChefs(chefs);
      console.log("chefs: ", chefs);
    });
    return () => unsubscribe();
  }, [db]);
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
      {chefs.map((chef) => (
        <ChefCard key={chef.id} chef={chef} />
      ))}
    </div>
  );
};

export default Chefs;
